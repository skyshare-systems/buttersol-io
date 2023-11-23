import { FactoryABI, LPTokenABI, RouterV2ABI } from "@/lib/abi";
import {
  useDestinationData,
  useInitialData,
  useInitialNetwork,
} from "@/lib/store/store";
import React, { useEffect, useState } from "react";
import { useContractRead, Address, useNetwork } from "wagmi";
import { ethers } from "ethers";

import axios from "axios";

const useToken1Data = () => {
  const { chain } = useNetwork();

  const { factoryAddress, routerV2Address } = useInitialNetwork(
    (state) => state
  );
  const [token1, setToken1] = useState<any>(0.0);
  const [tokenLPAddress, setTokenLPAddress] = useState("");
  const { tokeninput: tokenInput0, tokenAddress: tokenAddress0 } =
    useInitialData((state) => state);
  const {
    tokenAddress: tokenAddress1,
    tokenIcon,
    tokenname,
    tokeninput,
    setData,
  } = useDestinationData((state) => state);

  // const { data: getPair } = useContractRead({
  //   address: factoryAddress,
  //   abi: FactoryABI,
  //   functionName: "getPair",
  //   args: [tokenAddress0, tokenAddress1],
  // });

  // const { data: getReserves } = useContractRead({
  //   address: getPair as Address,
  //   abi: LPTokenABI,
  //   functionName: "getReserves",
  // });

  // const getReserve: any = getReserves;

  // const { data: getAmountOut } = useContractRead({
  //   address: routerV2Address ?? "",
  //   abi: RouterV2ABI,
  //   functionName: "getAmountOut",
  //   args: [
  //     ethers.utils.parseEther(String(tokenInput0 ? tokenInput0 : 1)),
  //     getReserve?.[0],
  //     getReserve?.[1],
  //   ],
  // });

  // function calculateToken1() {
  //   try {
  //     const amount = ethers.utils.formatUnits(String(getAmountOut), 18);

  //     setData(tokenname, amount, tokenIcon, tokenAddress1);
  //   } catch (err) {
  //     setData(tokenname, "", tokenIcon, tokenAddress1);
  //   }
  // }

  async function getLPTokenAddress() {
    axios
      .post("https://quickraven-api.onrender.com/api/factory/pair", {
        network: chain?.id,
        factoryAddress: factoryAddress,
        tokenA: tokenAddress0,
        tokenB: tokenAddress1,
      })
      .then((res) => {
        console.log(res.data + " LP TOKEN ADDRESS");
        setTokenLPAddress(res.data);
      })
      .catch((err) => {
        console.info(err);
      });
  }

  async function getAmountOut() {
    axios
      .post("https://quickraven-api.onrender.com/api/router/amountOut", {
        network: chain?.id,
        routerAddress: routerV2Address,
        lpTokenAddress: tokenLPAddress,
        amountIn: String(ethers.utils.parseEther(tokenInput0)) ?? 0,
      })
      .then((res) => {
        console.log(res);
        setData(tokenname, res.data, tokenIcon, tokenAddress1);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (tokenAddress1 !== "") getLPTokenAddress();

    const delayDebounceFn = setTimeout(() => {
      if (tokenInput0 > 0) getAmountOut();
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [tokenAddress0, tokenAddress1, tokenInput0]);

  return {
    // calculateToken1,
    // getAmountOut,
    token1,
    tokenAddress1,
    tokenAddress0,
    tokenLPAddress,
    getLPTokenAddress,
  };
};

export default useToken1Data;
