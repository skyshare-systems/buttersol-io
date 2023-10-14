import { FactoryABI, LPTokenABI, RouterV2ABI } from "@/lib/abi";
import {
  useDestinationData,
  useInitialData,
  useInitialNetwork,
} from "@/lib/store/store";
import React, { useEffect, useState } from "react";
import { useContractRead, Address } from "wagmi";
import { ethers } from "ethers";

const useToken1Data = () => {
  const { factoryAddress, routerV2Address } = useInitialNetwork(
    (state) => state
  );
  const [token1, setToken1] = useState<any>(0.0);

  const { tokeninput: tokenInput0, tokenAddress: tokenAddress0 } =
    useInitialData((state) => state);
  const {
    tokenAddress: tokenAddress1,
    tokenIcon,
    tokenname,
    setData,
  } = useDestinationData((state) => state);

  const { data: getPair } = useContractRead({
    address: factoryAddress,
    abi: FactoryABI,
    functionName: "getPair",
    args: [tokenAddress0, tokenAddress1],
  });

  const { data: getReserves } = useContractRead({
    address: getPair as Address,
    abi: LPTokenABI,
    functionName: "getReserves",
  });

  const getReserve: any = getReserves;

  const { data: getAmountOut } = useContractRead({
    address: routerV2Address ?? "",
    abi: RouterV2ABI,
    functionName: "getAmountOut",
    args: [
      ethers.utils.parseEther(String(tokenInput0 ? tokenInput0 : 1)),
      getReserve?.[0],
      getReserve?.[1],
    ],
  });

  function calculateToken1() {
    try {
      const amount = ethers.utils.formatUnits(String(getAmountOut), 18);

      console.log(amount + " amount");
      setData(tokenname, amount, tokenIcon, tokenAddress1);
      // setToken1(amount);
    } catch (err) {
      setData(tokenname, "", tokenIcon, tokenAddress1);
      // setToken1(0);
      console.log(err);
    }
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (tokenInput0 > 0) calculateToken1();
      if (tokenInput0 <= 0) setData(tokenname, "", tokenIcon, tokenAddress1);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [tokenAddress0, tokenAddress1, tokenInput0]);

  return {
    calculateToken1,
    getAmountOut,
    token1,
    tokenAddress1,
    tokenAddress0,
  };
};

export default useToken1Data;
