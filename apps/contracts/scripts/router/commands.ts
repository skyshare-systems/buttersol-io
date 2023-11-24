import { ethers } from "hardhat";
import {
  SEPOLIA_BNB,
  SEPOLIA_ETH,
  SEPOLIA_ROUTER_V2,
  SEPOLIA_USDT,
} from "../addresses";
import { liquidity } from "./data";

async function main() {
  const router = await ethers.getContractAt(
    "IPancakeRouter01",
    SEPOLIA_ROUTER_V2
  );
  // const eth = await ethers.getContractAt("Token", SEPOLIA_ETH);
  // const bnb = await ethers.getContractAt("Token", SEPOLIA_BNB);
  // const usdt = await ethers.getContractAt("Token", SEPOLIA_USDT);

  console.log("Supply liquidity to token pairs...");
  await router.addLiquidity(
    SEPOLIA_ETH,
    SEPOLIA_BNB,
    liquidity.amountADesired,
    liquidity.amountBDesired,
    liquidity.amountAMin,
    liquidity.amountBMin,
    liquidity.to,
    liquidity.deadline
  );
  await router.addLiquidity(
    SEPOLIA_ETH,
    SEPOLIA_USDT,
    liquidity.amountADesired,
    liquidity.amountBDesired,
    liquidity.amountAMin,
    liquidity.amountBMin,
    liquidity.to,
    liquidity.deadline
  );
  await router.addLiquidity(
    SEPOLIA_BNB,
    SEPOLIA_USDT,
    liquidity.amountADesired,
    liquidity.amountBDesired,
    liquidity.amountAMin,
    liquidity.amountBMin,
    liquidity.to,
    liquidity.deadline
  );
  console.info("Supplied liquidity to token pairs!");
}

main();
