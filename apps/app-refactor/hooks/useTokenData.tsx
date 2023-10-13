"use client";
import React, { useEffect, useState } from "react";
import EthIcon from "public/icons/swap/network/eth-icon.svg";
import BnbIcon from "public/icons/swap/network/bnb-icon.svg";
import SolanaIcon from "public/icons/swap/network/solana-icon.svg";
import USDTIcon from "public/icons/swap/token/usdt-icon.svg";
import { useDestinationNetwork, useInitialData } from "@/lib/store/store";
import { useNetwork, useSwitchNetwork } from "wagmi";

const useTokenData = (initNetworkName: string) => {
  const [networkArray, setNetworkArray] = useState<any[]>([]);
  const { tokeninput, tokenname, tokenIcon, setData } = useInitialData(
    (state) => state
  );
  const {
    networkname: destinationNetworkName,
    setNetwork: setDestinationNetwork,
    networkicon: networkDestinationIcon,
  } = useDestinationNetwork((state) => state);
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  const tokensepoliadata = [
    {
      name: "ETH",
      icon: <EthIcon className="w-full max-w-[24px]" />,
    },
    {
      name: "USDT",
      icon: <USDTIcon className="w-full max-w-[24px]" />,
    },
  ];

  const tokenbnbdata = [
    {
      name: "BNB",
      icon: <BnbIcon className="w-full max-w-[24px]" />,
    },
    {
      name: "USDT",
      icon: <USDTIcon className="w-full max-w-[24px]" />,
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
    },
    {
      name: "Binance Smart Chain",
      icon: <BnbIcon className="w-full max-w-[24px]" />,
    },
    {
      name: "Solana",
      icon: <SolanaIcon className="w-full max-w-[24px]" />,
    },
  ];

  const TokenData = (initNetworkName: string) => {
    switch (initNetworkName) {
      case "Sepolia":
        return tokensepoliadata;
      case "Binance Smart Chain":
        return tokenbnbdata;
      case "Solana":
        return tokensolanadata;
      default:
        return "";
    }
  };

  useEffect(() => {
    const newArray: any = [];

    networkdata
      .filter((datafilter) => {
        return initNetworkName !== datafilter.name;
      })
      .map((data) => {
        newArray.push(data);
      });

    setNetworkArray(newArray);

    if (initNetworkName === destinationNetworkName) {
      setDestinationNetwork("", "");
    }

    setData("", "", "");
    switch (initNetworkName) {
      case "Sepolia":
        return switchNetwork?.(11155111);
      case "Binance Smart Chain":
        return switchNetwork?.(97);
      case "Solana":
        return console.log(chain?.id);
      default:
        return console.log(chain?.id);
    }
  }, [initNetworkName]);

  return { TokenData, networkdata, networkArray };
};

export default useTokenData;
