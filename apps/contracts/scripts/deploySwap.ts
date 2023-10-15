import { ethers, upgrades } from "hardhat";

async function main() {
  const Swap = await ethers.getContractFactory("ButterSwap");
  const swap = await upgrades.deployProxy(Swap, []);

  console.info("\nDeploying Swap...");
  await swap.deployed();
  console.info("Swap deployed to:", swap.address);
}

main();
