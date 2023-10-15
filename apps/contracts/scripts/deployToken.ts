import { ethers, upgrades } from "hardhat";

async function main() {
  const Token = await ethers.getContractFactory("Token");
  const token = await upgrades.deployProxy(Token, ["ETH", "ETH"]);

  console.log("\nDeploying Token...");
  await token.deployed();
  console.log("Token deployed to:", token.address);

  // const Token2 = await ethers.getContractFactory("Token");
  // const token2 = await upgrades.deployProxy(Token2, ["BNB", "BNB"]);

  // console.log("\nDeploying Native Token...");
  // await token2.deployed();
  // console.log("Native Token deployed to:", token2.address);
}

main();
