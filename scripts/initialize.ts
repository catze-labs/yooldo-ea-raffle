import { ethers, run } from 'hardhat';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';

async function main() {
    // compile our contract
    await run('compile');

    const [deployer] = await ethers.getSigners();

    const Raffle = await ethers.getContractFactory('Raffle');
    const raffle = await Raffle.deploy();

    const walletCount = 1000;

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
        const result = array.map((a) => ({sort: rng.nextFloat(), value: a}));
        result.sort((a, b) => a.sort - b.sort);
        return result.map((a) => a.value);
    }

    function getRandomWalletAddress(): string {
        let address = ethers.utils.hexlify(ethers.utils.randomBytes(20));
        while (!ethers.utils.isAddress(address)) {
            address = ethers.utils.hexlify(ethers.utils.randomBytes(20));
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

    const tickets = getMultipleRandomAddresses(walletCount);

    // We wait for our contract to be mined
    await raffle.deployed();

    // Get the deployed contract using the contract address
    const raffleAttached = Raffle.attach(`${process.env.RAFFLE_CONTRACT_ADDRESS}`);
    
    // setTickets
    // const tx = await raffleAttached.setTickets(tickets);
    // await tx.wait();
    // console.log('setTickets done');

    // setTickets with 100 wallets each for ten times
    for (let i = 0; i < walletCount/100; i++) {
        const tx = await raffleAttached.addTickets(tickets.slice(i * 100, (i + 1) * 100));
        await tx.wait();
        console.log('addTickets done');
    }

    // setPool
    const tx2 = await raffleAttached.setPool(10000);
    await tx2.wait();
    console.log('setPool done');

    // setSeedNumber
    const tx3 = await raffleAttached.setSeedNumber();
    await tx3.wait();
    console.log('setSeedNumber done');

    const web3 = new Web3(`${process.env.BSC_MAINNET_RPC_URL}`);
    const accounts = await web3.eth.getAccounts();
    const contractABI = JSON.parse(`/abi/contracts/Raffle.sol/Raffle.json`);
    const contractAddress = `${process.env.RAFFLE_CONTRACT_ADDRESS}`;

    const contract = new web3.eth.Contract(contractABI, contractAddress);

    const seedNumber = '';

    contract.events.seedNumberSet(async (error: any, event: { returnValues: { seedNumber: { toString: () => any; }; }; }) => { // Added async here
        if (error) {
            console.error(error);
            return;
        }

        const seedNumber = event.returnValues.seedNumber.toString();
        const shuffledTickets = shuffleWithSeed(tickets, parseInt(seedNumber));
        await contract.methods.addShuffledTickets(shuffledTickets).send({ from: accounts[0] });
    });

    const shuffledTickets = shuffleWithSeed(tickets, parseInt(seedNumber, 16));

    
    // addShuffledTickets
    for (let i = 0; i < walletCount/100; i++) {
        const tx = await raffleAttached.addShuffledTickets(shuffledTickets.slice(i * 100, (i + 1) * 100));
        await tx.wait();
        console.log('addShuffledTickets done');
    }

    // addShuffledPlaces
    for (let i = 0; i < walletCount/100; i++) {
        const tx = await raffleAttached.addShuffledPlaces(shuffledTickets.slice(i * 100, (i + 1) * 100));
        await tx.wait();
        console.log('addShuffledPlaces done');
    }

    // setPlaceByAddress
    const tx4 = await raffleAttached.setPlaceByAddress();
    await tx4.wait();
    console.log('setPlaceByAddress done');
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
// npx hardhat run --network bsc_testnet scripts/deploy.ts 
// npx hardhat run --network oasys_testnet scripts/deploy.ts 
// npx hardhat run --network yooldo_verse_testnet scripts/deploy.ts
// npx hardhat run --network polygon_testnet scripts/deploy.ts