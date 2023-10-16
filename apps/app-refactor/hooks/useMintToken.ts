import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";
import { TokenABI } from "@/lib/abi";

const useMintToken = () => {
  const { address: account } = useAccount();
  // Sepolia
  const { config: configETHSepolia } = usePrepareContractWrite({
    address: "0xdc36F92a63A9a78B0175677F926dA3B2d01D745D",
    abi: TokenABI,
    functionName: "mint",
    args: [account, BigInt(1000000000000000000000)],
  });
  const { config: configBNBSepolia } = usePrepareContractWrite({
    address: "0xB71Be8a3160E5B7B2a9919aa4b7059914601b785",
    abi: TokenABI,
    functionName: "mint",
    args: [account, BigInt(1000000000000000000000)],
  });
  const { config: configUSDTSepolia } = usePrepareContractWrite({
    address: "0xf8Fa70AD19566C2D3D8c25717CdCbb257F5b59Ce",
    abi: TokenABI,
    functionName: "mint",
    args: [account, BigInt(1000000000000000000000)],
  });

  const { writeAsync: mintETHSepolia } = useContractWrite(configETHSepolia);
  const { writeAsync: mintBNBSepolia } = useContractWrite(configBNBSepolia);
  const { writeAsync: mintUSDTSepolia } = useContractWrite(configUSDTSepolia);

  //Binance

  const { config: configETHBSC } = usePrepareContractWrite({
    address: "0xc4B0605d23A4217b12aC4D5400cCBe5064d09EeF",
    abi: TokenABI,
    functionName: "mint",
    args: [account, BigInt(1000000000000000000000)],
  });
  const { config: configBNBBSC } = usePrepareContractWrite({
    address: "0x4A232629A6e7Db30C70750ff572284617824e0DB",
    abi: TokenABI,
    functionName: "mint",
    args: [account, BigInt(1000000000000000000000)],
  });
  const { config: configUSDTBSC } = usePrepareContractWrite({
    address: "0x09d6Ca1C9B51436a464F8241726e7FDCC713183b",
    abi: TokenABI,
    functionName: "mint",
    args: [account, BigInt(1000000000000000000000)],
  });

  const { writeAsync: mintETHBSC } = useContractWrite(configETHBSC);
  const { writeAsync: mintBNBBSC } = useContractWrite(configBNBBSC);
  const { writeAsync: mintUSDTBSC } = useContractWrite(configUSDTBSC);

  return {
    mintETHSepolia,
    mintBNBSepolia,
    mintUSDTSepolia,
    mintETHBSC,
    mintBNBBSC,
    mintUSDTBSC,
  };
};

export default useMintToken;
