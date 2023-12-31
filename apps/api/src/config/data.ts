import { ethers } from "ethers";
import { tokenAbi, factoryAbi, lpTokenAbi, routerAbi } from "../abi";

export const blockchainKeys = (chainId: number) => {
  if (chainId === 80001) {
    return {
      key: "rLc98yWplzZqRlAZwg9RwiT",
      https:
        "https://polygon-mumbai.g.alchemy.com/v2/rLc98yWplzZqRlAZwg9RwiT-PMM0BKXi",
      wss: "wss://polygon-mumbai.g.alchemy.com/v2/rLc98yWplzZqRlAZwg9RwiT-PMM0BKXi",
    };
  }

  if (chainId === 11155111) {
    return {
      key: "",
      https:
        "https://eth-sepolia.g.alchemy.com/v2/s-hdjLqITCIC-0yx948QMzzi7v-43Sss",
      wss: "",
    };
  }

  if (chainId === 97) {
    return {
      key: "",
      https: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      wss: "",
    };
  }

  if (chainId === 43113) {
    return {
      key: "",
      https: "https://ava-testnet.public.blastapi.io/ext/bc/C/rpc	",
      wss: "",
    };
  }
};

export const tokenContract = (network: number, address: string) => {
  const provider = new ethers.JsonRpcProvider(blockchainKeys(network)?.https);
  const contract = new ethers.Contract(address, tokenAbi, provider);

  return contract;
};

export const factoryContract = (network: number, address: string) => {
  const provider = new ethers.JsonRpcProvider(blockchainKeys(network)?.https);
  const contract = new ethers.Contract(address, factoryAbi, provider);

  return contract;
};

export const lpTokenContract = (network: number, address: string) => {
  const provider = new ethers.JsonRpcProvider(blockchainKeys(network)?.https);
  const contract = new ethers.Contract(address, lpTokenAbi, provider);

  return contract;
};

export const routerContract = (network: number, address: string) => {
  const provider = new ethers.JsonRpcProvider(blockchainKeys(network)?.https);
  const contract = new ethers.Contract(address, routerAbi, provider);

  return contract;
};
