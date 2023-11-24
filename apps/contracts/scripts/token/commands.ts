import { ethers } from "hardhat";
import {
  BSC_TESTNET_BNB,
  BSC_TESTNET_ETH,
  BSC_TESTNET_SWAP,
  BSC_TESTNET_USDT,
  SEPOLIA_BNB,
  SEPOLIA_ETH,
  SEPOLIA_ROUTER_V2,
  SEPOLIA_USDT,
} from "../addresses";

async function main() {
  const eth = await ethers.getContractAt("Token", SEPOLIA_ETH);
  const bnb = await ethers.getContractAt("Token", SEPOLIA_USDT);
  const usdt = await ethers.getContractAt("Token", SEPOLIA_BNB);

  console.log("\nApproving swap to spend tokens...");
  await eth.approve(SEPOLIA_ROUTER_V2, ethers.constants.MaxUint256);
  await bnb.approve(SEPOLIA_ROUTER_V2, ethers.constants.MaxUint256);
  await usdt.approve(SEPOLIA_ROUTER_V2, ethers.constants.MaxUint256);
  console.info("Approved swap to spend tokens!");
}

main();
