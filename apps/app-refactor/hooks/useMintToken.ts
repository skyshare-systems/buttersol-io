import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";
import { TokenABI } from "@/lib/abi";

const useMintToken = () => {
  const { address: account } = useAccount();
  // Sepolia
  const { config: configETHSepolia } = usePrepareContractWrite({
    address: "0x8a202Abd773F81f6C8CD22001F233B81BDD42328",
    abi: TokenABI,
    functionName: "mint",
    args: [account, BigInt(1000000000000000000000)],
  });
  const { config: configBNBSepolia } = usePrepareContractWrite({
    address: "0x70Af51cc35309a3ADd4D48e0e4632C6A7e1C5229",
    abi: TokenABI,
    functionName: "mint",
    args: [account, BigInt(1000000000000000000000)],
  });
  const { config: configUSDTSepolia } = usePrepareContractWrite({
    address: "0x7a103E97298A3E628031498F9Ece2c9F8dfBcbeC",
    abi: TokenABI,
    functionName: "mint",
    args: [account, BigInt(1000000000000000000000)],
  });

  const { writeAsync: mintETHSepolia, isLoading: isLoadingETHSepolia } =
    useContractWrite(configETHSepolia);
  const { writeAsync: mintBNBSepolia, isLoading: isLoadingBNBSepolia } =
    useContractWrite(configBNBSepolia);
  const { writeAsync: mintUSDTSepolia, isLoading: isLoadingUSDTSepolia } =
    useContractWrite(configUSDTSepolia);

  //Binance

  const { config: configETHBSC } = usePrepareContractWrite({
    address: "0xCECB2c7F146326FBe8aeCE155c3B4d52Adc4b5A5",
    abi: TokenABI,
    functionName: "mint",
    args: [account, BigInt(1000000000000000000000)],
  });
  const { config: configBNBBSC } = usePrepareContractWrite({
    address: "0xD16211AF6954C5765157bc4c8382d69e009A595B",
    abi: TokenABI,
    functionName: "mint",
    args: [account, BigInt(1000000000000000000000)],
  });
  const { config: configUSDTBSC } = usePrepareContractWrite({
    address: "0x4611DeF17D35d909d585c6494A187D467387a855",
    abi: TokenABI,
    functionName: "mint",
    args: [account, BigInt(1000000000000000000000)],
  });

  const { writeAsync: mintETHBSC, isLoading: isLoadingETHBSC } =
    useContractWrite(configETHBSC);
  const { writeAsync: mintBNBBSC, isLoading: isLoadingBNBBSC } =
    useContractWrite(configBNBBSC);
  const { writeAsync: mintUSDTBSC, isLoading: isLoadingUSDTBSC } =
    useContractWrite(configUSDTBSC);

  return {
    mintETHSepolia,
    mintBNBSepolia,
    mintUSDTSepolia,
    mintETHBSC,
    mintBNBBSC,
    mintUSDTBSC,

    isLoadingETHSepolia,
    isLoadingBNBSepolia,
    isLoadingUSDTSepolia,

    isLoadingETHBSC,
    isLoadingBNBBSC,
    isLoadingUSDTBSC,
  };
};

export default useMintToken;
