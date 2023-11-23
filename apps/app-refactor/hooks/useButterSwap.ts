import React from "react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import {
  useDestinationData,
  useInitialData,
  useInitialNetwork,
} from "@/lib/store/store";
import { ButterSwapABI } from "@/lib/abi";
import { ethers } from "ethers";

const useButterSwap = () => {
  const { routerV2Address, address: butterSwapAddress } = useInitialNetwork(
    (state) => state
  );
  const { tokenAddress: tokenInAddress, tokeninput: tokenIn } = useInitialData(
    (state) => state
  );
  const { tokenAddress: tokenOutAddress, tokeninput: tokenOut } =
    useDestinationData((state) => state);

  const { config: configSwap, isError: isErrorSwap } = usePrepareContractWrite({
    address: butterSwapAddress ?? "",
    abi: ButterSwapABI,
    functionName: "butterSwap",
    args: [
      [
        routerV2Address,
        tokenInAddress,
        tokenOutAddress,
        ethers.utils.parseEther(String(tokenIn ? tokenIn : 1)),
        ethers.utils.parseEther(String(tokenOut ? tokenOut : 1)),
      ],
    ],
  });

  const { writeAsync: writeButterSwap, isLoading: isLoadingSwap } =
    useContractWrite(configSwap);

  return { writeButterSwap, isErrorSwap, isLoadingSwap };
};

export default useButterSwap;
