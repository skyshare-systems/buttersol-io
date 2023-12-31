import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
// import "@nomiclabs/hardhat-etherscan";
import "@openzeppelin/hardhat-upgrades";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.21",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/s-hdjLqITCIC-0yx948QMzzi7v-43Sss",
      accounts: [process.env.PRIVATE_KEY_TESTNET ?? ""],
    },
    bsc: {
      url: "https://bsc-testnet.publicnode.com",
      accounts: [process.env.PRIVATE_KEY_TESTNET ?? ""],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: "1T7UC6DGWNA36AVHC4IGIRRE1MTGCSKE74",
      bscTestnet: "GWKE3MR5JXP1KVY4635YHC8AKI7FI55WK3",
    },
  },
};

export default config;
