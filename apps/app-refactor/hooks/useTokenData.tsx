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
      address: "0x8a202Abd773F81f6C8CD22001F233B81BDD42328",
    },
    {
      name: "BNB",
      icon: <BnbIcon className="w-full max-w-[24px]" />,
      address: "0x70Af51cc35309a3ADd4D48e0e4632C6A7e1C5229",
    },
    {
      name: "USDT",
      icon: <USDTIcon className="w-full max-w-[24px]" />,
      address: "0x7a103E97298A3E628031498F9Ece2c9F8dfBcbeC",
    },
  ];

  const tokenbnbdata = [
    {
      name: "BNB",
      icon: <BnbIcon className="w-full max-w-[24px]" />,
      address: "0xD16211AF6954C5765157bc4c8382d69e009A595B",
    },
    {
      name: "ETH",
      icon: <EthIcon className="w-full max-w-[24px]" />,
      address: "0xCECB2c7F146326FBe8aeCE155c3B4d52Adc4b5A5",
    },

    {
      name: "USDT",
      icon: <USDTIcon className="w-full max-w-[24px]" />,
      address: "0x4611DeF17D35d909d585c6494A187D467387a855",
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
      quickRavenSwapAddress: "0xE9e6fD5958703bc78900BA763302ca4042190FDa",
      factorySwapAddress: "0x7E0987E5b3a30e3f2828572Bb659A548460a3003",
      routerV2Address: "0xC532a74256D3Db42D0Bf7a0400fEFDbad7694008",
    },
    {
      name: "Binance Smart Chain",
      icon: <BnbIcon className="w-full max-w-[24px]" />,
      quickRavenSwapAddress: "0x6e697d7E5864E74011365419D91fB51798d0c781",
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
