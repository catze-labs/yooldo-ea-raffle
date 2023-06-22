import { run, network } from 'hardhat';
const hre = require('hardhat');

async function main() {
    // compile our contract
    await run('compile');

    // const [deployer] = await hre.ethers.getSigners();

    const Raffle = await hre.ethers.getContractFactory('Raffle');
    const raffle = await Raffle.deploy();

    console.log('Deploying Raffle...');

    // We wait for our contract to be mined
    await raffle.waitForDeployment();

    const raffleAddress = await raffle.getAddress();

    console.log('Raffle deployed to:', raffleAddress);

    console.log(`
        npx hardhat verify --network ${network.name} ${raffleAddress}
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