require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("@nomicfoundation/hardhat-chai-matchers");
require('hardhat-abi-exporter');

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const BSC_TESTNET_RPC_URL = process.env.BSC_TESTNET_RPC_URL;
const BSC_MAINNET_RPC_URL = process.env.BSC_MAINNET_RPC_URL;
const OASYS_TESTNET_RPC_URL = process.env.OASYS_TESTNET_RPC_URL;
const YOOLDO_VERSE_MAINNET_RPC_URL = process.env.YOOLDO_VERSE_MAINNET_RPC_URL;

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    bsc_testnet: {
      url: `${BSC_TESTNET_RPC_URL}`,
      accounts: [`${PRIVATE_KEY}`],
      gas : 20000000,
      gasPrice : 40000000000,
    },
    bsc_mainnet: {
      url: `${BSC_MAINNET_RPC_URL}`,
      accounts: [`${PRIVATE_KEY}`],
    },
    oasys_testnet: {
      url: `${OASYS_TESTNET_RPC_URL}`,
      accounts: [`${PRIVATE_KEY}`]
    },
    yooldo_verse_mainnet: {
      url: `${YOOLDO_VERSE_MAINNET_RPC_URL}`,
      accounts: [`${PRIVATE_KEY}`]
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY
  },
};

export default config;
