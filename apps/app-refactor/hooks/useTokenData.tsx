"use client";
import React, { useEffect, useState } from "react";
import EthIcon from "public/icons/swap/network/eth-icon.svg";
import BnbIcon from "public/icons/swap/network/bnb-icon.svg";
import SolanaIcon from "public/icons/swap/network/solana-icon.svg";
import USDTIcon from "public/icons/swap/token/usdt-icon.svg";
import { useInitialData } from "@/lib/store/store";
import { useNetwork, useSwitchNetwork } from "wagmi";

const useTokenData = (tempInitNetworkName: string) => {
  const [networkArray, setNetworkArray] = useState<any[]>([]);
  const { setData } = useInitialData((state) => state);

  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  const tokensepoliadata = [
    {
      name: "ETH",
      icon: <EthIcon className="w-full max-w-[24px]" />,
      address: "0xdc36F92a63A9a78B0175677F926dA3B2d01D745D",
    },
    {
      name: "BNB",
      icon: <BnbIcon className="w-full max-w-[24px]" />,
      address: "0xB71Be8a3160E5B7B2a9919aa4b7059914601b785",
    },
    {
      name: "USDT",
      icon: <USDTIcon className="w-full max-w-[24px]" />,
      address: "0xf8Fa70AD19566C2D3D8c25717CdCbb257F5b59Ce",
    },
  ];

  const tokenbnbdata = [
    {
      name: "BNB",
      icon: <BnbIcon className="w-full max-w-[24px]" />,
      address: "0x4A232629A6e7Db30C70750ff572284617824e0DB",
    },
    {
      name: "ETH",
      icon: <EthIcon className="w-full max-w-[24px]" />,
      address: "0xc4B0605d23A4217b12aC4D5400cCBe5064d09EeF",
    },

    {
      name: "USDT",
      icon: <USDTIcon className="w-full max-w-[24px]" />,
      address: "0x09d6Ca1C9B51436a464F8241726e7FDCC713183b",
    },
  ];

  const tokensolanadata = [
    {
      name: "SOL",
      icon: <SolanaIcon className="w-full max-w-[24px]" />,
    },
    {
      name: "USDT",
      icon: <USDTIcon className="w-full max-w-[24px]" />,
    },
  ];

  const networkdata = [
    {
      name: "Sepolia",
      icon: <EthIcon className="w-full max-w-[24px]" />,
      butterSwapAddress: "0x28F491124FBd452dbcD2a5aA06d5985941d11dB0",
      factorySwapAddress: "0x7E0987E5b3a30e3f2828572Bb659A548460a3003",
      routerV2Address: "0xC532a74256D3Db42D0Bf7a0400fEFDbad7694008",
    },
    {
      name: "Binance Smart Chain",
      icon: <BnbIcon className="w-full max-w-[24px]" />,
      butterSwapAddress: "0x144C2849e6eD7b0D9DC22485Fa1c54d830896021",
      factorySwapAddress: "0x46E9aD48575d08072E9A05a9BDE4F22973628A8E",
      routerV2Address: "0xDE2Db97D54a3c3B008a097B2260633E6cA7DB1AF",
    },
    // {
    //   name: "Solana",
    //   icon: <SolanaIcon className="w-full max-w-[24px]" />,
    // },
  ];

  const TokenData = (initNetworkName: string) => {
    switch (initNetworkName) {
      case "Sepolia":
        return tokensepoliadata;
      case "Binance Smart Chain":
        return tokenbnbdata;
      // case "Solana":
      //   return tokensolanadata;
      default:
        return "";
    }
  };

  useEffect(() => {
    const newArray: any = [];

    networkdata
      .filter((datafilter) => {
        return tempInitNetworkName !== datafilter.name;
      })
      .map((data) => {
        newArray.push(data);
      });
    setNetworkArray(newArray);

    setData("", "", "", "");

    switch (tempInitNetworkName) {
      case "Sepolia":
        return switchNetwork?.(11155111);
      case "Binance Smart Chain":
        return switchNetwork?.(97);
    }
  }, [tempInitNetworkName]);

  return { TokenData, networkdata, networkArray };
};

export default useTokenData;
