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

const InitialInput = () => {
  const [token0, setToken0] = useState<any>("");
  const [selectNetwork, setSelectNetwork] = useState<string>("");
  const [selectToken, setSelectToken] = useState<string>("");

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
    <div className="flex flex-col gap-4 rounded-2xl border border-white-8 p-4">
      <div className="flex flex-row items-center gap-2 p-2 bg-dark-32 rounded-lg">
        <DropdownReusable
          datadropdown={networkdata}
          selectData={selectNetwork}
          setSelectData={setSelectNetwork}
          title={"initial-network"}
          placeholder={"Network"}
          icon={<NetworkIcon className="w-full max-w-[1rem]" />}
        />
        <DropdownReusable
          datadropdown={tokendata}
          selectData={selectToken}
          setSelectData={setSelectToken}
          title={"initial-token"}
          placeholder={"Token"}
          icon={<TokenIcon className="w-full max-w-[1rem]" />}
        />
      </div>

      <div className="flex flex-row gap-2 items-center">
        <Input
          id={"token0"}
          placeholder={"0.00"}
          value={token0}
          onChange={(
            value: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setToken0(value ?? "")}
        />
        <button className="subtitle uppercase text-secondary-100 px-4 py-2 rounded-lg border border-secondary-32 bg-secondary-12">
          max
        </button>
      </div>
      <TokenBalance dollars={0.0} balance={0.0} />
    </div>
  );
};

export default InitialInput;
