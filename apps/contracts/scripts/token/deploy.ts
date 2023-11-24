import { ethers, upgrades } from "hardhat";
import { BSC_TESTNET_SWAP, SEPOLIA_SWAP } from "../addresses";

async function main() {
  // const Token = await ethers.getContractFactory("Token");
  // const token = await upgrades.deployProxy(Token, ["ETH", "ETH"]);

  // console.log("\nDeploying ETH PEG Token...");
  // await token.deployed();
  // console.log("ETH PEG Token deployed to:", token.address);

  // const Token2 = await ethers.getContractFactory("Token");
  // const token2 = await upgrades.deployProxy(Token2, ["BNB", "BNB"]);

  // console.log("\nDeploying BNB PEG Token...");
  // await token2.deployed();
  // console.log("BNB PEG Token deployed to:", token2.address);

  // const Token3 = await ethers.getContractFactory("Token");
  // const token3 = await upgrades.deployProxy(Token3, ["USDT", "USDT"]);

  // console.log("\nDeploying USDT PEG Token...");
  // await token3.deployed();
  // console.log("USDT PEG deployed to:", token3.address);

  console.log("\nApproving swap to spend tokens...");
  await token3.approve(BSC_TESTNET_SWAP, ethers.constants.MaxUint256);
  console.info("Approved swap to spend tokens!");
}

main();
