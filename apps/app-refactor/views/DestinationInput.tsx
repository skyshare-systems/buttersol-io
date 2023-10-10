"use client";
import DropdownReusable from "@/components/Dropdown";
import Input from "@/components/Input";
import TokenBalance from "@/components/TokenBalance";
import React, { useState } from "react";
import EthIcon from "public/icons/swap/network/eth-icon.svg";
import BnbIcon from "public/icons/swap/network/bnb-icon.svg";
import SolanaIcon from "public/icons/swap/network/solana-icon.svg";
import NetworkIcon from "public/icons/swap/network-icon.svg";
import TokenIcon from "public/icons/swap/token/token-icon.svg";
import { useDestinationData, useDestinationNetwork } from "@/lib/store/store";
import { useAccount } from "wagmi";

const DestinationInput = () => {
  const { tokeninput, tokenname, tokenIcon, setData } = useDestinationData(
    (state) => state
  );

  const { isConnected } = useAccount();

  const {
    networkname: destinationNetworkName,
    setNetwork: setDestinationNetwork,
    networkicon: networkDestinationIcon,
  } = useDestinationNetwork((state) => state);

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

  const tokendata = [
    {
      name: "ETH",
      icon: <EthIcon className="w-full max-w-[24px]" />,
    },
    {
      name: "BNB",
      icon: <BnbIcon className="w-full max-w-[24px]" />,
    },
    {
      name: "SOL",
      icon: <SolanaIcon className="w-full max-w-[24px]" />,
    },
  ];

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white-8 bg-white-4 sm:bg-transparent p-4">
      <div className="flex flex-col sm:flex-row items-center gap-2 p-2 bg-dark-32 rounded-lg">
        <DropdownReusable
          datadropdown={networkdata}
          selectData={destinationNetworkName}
          setSelectData={setDestinationNetwork}
          title={"initial-network"}
          placeholder={"Network"}
          icon={networkDestinationIcon}
          disable={isConnected === true ? false : true}
        />
        <DropdownReusable
          datadropdown={tokendata}
          selectData={tokenname}
          setSelectData={setData}
          title={"initial-token"}
          placeholder={"Token"}
          icon={tokenIcon}
          disable={destinationNetworkName !== "" ? false : true}
        />
      </div>

      <div className="flex flex-row gap-2 items-center px-2">
        <Input
          id={"token1"}
          placeholder={"0.00"}
          value={tokeninput}
          // disabled
          onChange={(
            value: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setData(tokenname, value, tokenIcon)}
        />
      </div>
      <TokenBalance dollars={0.0} balance={0.0} token={tokenname} />
    </div>
  );
};

export default DestinationInput;
