import { run } from 'hardhat';
import Web3 from 'web3';
import fs from 'fs';
const hre = require("hardhat");
const path = require('path');
const appRoot = require('app-root-path');

async function main() {

    const web3 = new Web3(`${process.env.POLYGON_TESTNET_RPC_URL}`);

    // compile our contract
    await run('compile');

    const [deployer] = await hre.ethers.getSigners();

    const Raffle = await hre.ethers.getContractFactory('Raffle');

    // simple implementation of the Lehmer (or Park-Miller) random number generator (RNG)
    class Lehmer {
        private seed: number;

        constructor(seed: number) {
            this.seed = seed % 2147483647;
            if (this.seed <= 0) this.seed += 2147483646;
        }

        next(): number {
            return this.seed = this.seed * 16807 % 2147483647;
        }

        nextFloat(): number {
            return (this.next() - 1) / 2147483646;
        }
    }

    function shuffleWithSeed(array: any[], seed: number): any[] {
        const rng = new Lehmer(seed);
        const result = array.map((a) => ({ sort: rng.nextFloat(), value: a }));
        result.sort((a, b) => a.sort - b.sort);
        return result.map((a) => a.value);
    }

    function getRandomWalletAddress(): string {
        let address = hre.ethers.utils.hexlify(hre.ethers.utils.randomBytes(20));
        while (!hre.ethers.utils.isAddress(address)) {
            address = hre.ethers.utils.hexlify(hre.ethers.utils.randomBytes(20));
        }
        return address;
    }

    function getMultipleRandomAddresses(num: number): string[] {
        const addresses: string[] = [];
        for (let i = 0; i < num; i++) {
            addresses.push(getRandomWalletAddress());
        }
        return addresses;
    }

    // const walletCount = 1000;
    // const tickets = getMultipleRandomAddresses(walletCount);

    // Read the TSV file
    const tsvData = fs.readFileSync(appRoot + `${process.env.TSV}`, 'utf8');

    // declare JSON
    const tickets: any[] = [];

    // filter out the data we don't need and add walletAddress and usedRaffleCount to the array
    tsvData.split('\n').map((line) => {
        const [id, created, userId, walletAddress, usedRaffleCount] = line.split('\t');
        // append walletAddress usedRaffleCount times to transformedData
        for (let i = 0; i < parseInt(usedRaffleCount); i++) {
            tickets.push(walletAddress);
        }
    });

    // Print the transformed in JSON
    console.log(tickets);

    // Get the deployed contract using the contract address
    const raffleAttached = Raffle.attach(`${process.env.RAFFLE_CONTRACT_ADDRESS}`);

    // // setTickets
    // const tx = await raffleAttached.setTickets(tickets);
    // await tx.wait();
    // console.log('setTickets done');

    // if tickets.length is less than 100, setTickets
    if (tickets.length < 100) {
        const tx = await raffleAttached.addTickets(tickets);
        await tx.wait();
        console.log('addTickets done');
    } else {
        // setTickets with 100 wallets each for ten times
        for (let i = 0; i < tickets.length / 100; i++) {
            const tx = await raffleAttached.addTickets(tickets.slice(i * 100, (i + 1) * 100));
            await tx.wait();
            console.log('addTickets done');
        }
    }

    // setPool
    const tx2 = await raffleAttached.setPool(10000);
    await tx2.wait();
    console.log('setPool done');

    // setSeedNumber
    const tx3 = await raffleAttached.setSeedNumber();
    await tx3.wait();
    console.log('setSeedNumber done');

    const contractABI = JSON.parse(fs.readFileSync(appRoot + '/abi/contracts/Raffle.sol/Raffle.json', 'utf8'));
    const contractAddress = `${process.env.RAFFLE_CONTRACT_ADDRESS}`;

    const contract = new web3.eth.Contract(contractABI, contractAddress);

    // const seedNumber = '';
    const seedNumber: string = await contract.methods.seedNumber().call();

    // contract.events.seedNumberSet(async (error: any, event: { returnValues: { seedNumber: { toString: () => any; }; }; }) => {
    //     if (error) {
    //         console.error(error);
    //         return;
    //     }

    //     const seedNumber = event.returnValues.seedNumber.toString();
    //     const shuffledTickets = shuffleWithSeed(tickets, parseInt(seedNumber, 16));
    //     await contract.methods.addShuffledTickets(shuffledTickets).send({ from: accounts[0] });
    // });

    const shuffledTickets = shuffleWithSeed(tickets, parseInt(seedNumber, 16));

    const places: number[] = [];

    // init places with index with length of all possible tickets
    for (let i = 1; i <= 500; i++) {
        places.push(i);
    }

    const rng = new Lehmer(parseInt(seedNumber, 16));
    const result = places.map((a) => ({ sort: rng.nextFloat(), value: a }));
    result.sort((a, b) => a.sort - b.sort);
    const shuffledPlaces = result.map((a) => a.value);

    // const shuffledPlaces = places.map((a) => ({ sort: new Lehmer(parseInt(seedNumber, 16)).nextFloat(), value: a })).slice(0, tickets.length);

    console.log(shuffledTickets);
    console.log(shuffledPlaces);


    // addShuffledTickets
    for (let i = 0; i < tickets.length / 100; i++) {
        const tx = await raffleAttached.addShuffledTickets(shuffledTickets.slice(i * 100, (i + 1) * 100));
        await tx.wait();
        console.log('addShuffledTickets done');
    }

    // addShuffledPlaces
    for (let i = 0; i < tickets.length / 100; i++) {
        const tx = await raffleAttached.addShuffledPlaces(shuffledPlaces.slice(i * 100, (i + 1) * 100));
        await tx.wait();
        console.log('addShuffledPlaces done');
    }

    // // setPlaceByAddress
    // const tx4 = await raffleAttached.setPlaceByAddress();
    // await tx4.wait();
    // console.log('setPlaceByAddress done');

    let shuffledTicketsTSV = '';
    for (let i = 0; i < shuffledTickets.length; i++) {
        shuffledTicketsTSV += `${shuffledTickets[i]}\t${(Number (await raffleAttached.ratio(shuffledPlaces[i])))}\n`;
    }
    fs.writeFileSync(appRoot + '/result/shuffledTickets.tsv', shuffledTicketsTSV);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

// npx hardhat compile 
// npx hardhat clear-abi
// npx hardhat export-abi
// npx hardhat run --network bsc_testnet scripts/initialize.ts 
// npx hardhat run --network oasys_testnet scripts/initialize.ts 
// npx hardhat run --network yooldo_verse_testnet scripts/initialize.ts
// npx hardhat run --network polygon_testnet scripts/initialize.ts
// npx hardhat run --network bsc_mainnet scripts/initialize.ts