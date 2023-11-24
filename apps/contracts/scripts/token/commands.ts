import { ethers } from "hardhat";
import {
  BSC_TESTNET_BNB,
  BSC_TESTNET_ETH,
  BSC_TESTNET_SWAP,
  BSC_TESTNET_USDT,
} from "../addresses";

async function main() {
  const eth = await ethers.getContractAt("Token", BSC_TESTNET_ETH);
  const bnb = await ethers.getContractAt("Token", BSC_TESTNET_BNB);
  const usdt = await ethers.getContractAt("Token", BSC_TESTNET_USDT);

  console.log("\nApproving swap to spend tokens...");
  await eth.approve(BSC_TESTNET_SWAP, ethers.constants.MaxUint256);
  await bnb.approve(BSC_TESTNET_SWAP, ethers.constants.MaxUint256);
  await usdt.approve(BSC_TESTNET_SWAP, ethers.constants.MaxUint256);
  console.info("Approved swap to spend tokens!");
}

main();
