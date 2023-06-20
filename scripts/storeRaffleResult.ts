import { ethers, run, network } from 'hardhat';

async function main() {
    const [deployer] = await ethers.getSigners();

    const Raffle = await ethers.getContractFactory('Raffle');
    
    // Get the deployed contract using the contract address
    const raffleAttached = Raffle.attach(`${process.env.RAFFLE_CONTRACT_ADDRESS}`);
    
    // storeRaffleResult()
    const tx = await raffleAttached.storeRaffleResult();
    await tx.wait();
    console.log('storeRaffleResult done');
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