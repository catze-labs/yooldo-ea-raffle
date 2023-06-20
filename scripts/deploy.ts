import { ethers, run, network } from 'hardhat';

async function main() {
    // compile our contract
    await run('compile');

    const [deployer] = await ethers.getSigners();

    const Raffle = await ethers.getContractFactory('Raffle');
    const raffle = await Raffle.deploy();

    // We wait for our contract to be mined
    await raffle.deployed();

    console.log('Raffle deployed to:', raffle.address);

    console.log(`
        npx hardhat verify --network ${network.name} ${raffle.address}
  `);
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