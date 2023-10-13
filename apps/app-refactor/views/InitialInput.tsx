"use client";
import DropdownReusable from "@/components/Dropdown";
import Input from "@/components/Input";
import TokenBalance from "@/components/TokenBalance";
import React, { useEffect } from "react";
import BnbIcon from "public/icons/swap/network/bnb-icon.svg";
import EthIcon from "public/icons/swap/network/eth-icon.svg";

import {
  useInitialData,
  useInitialNetwork,
  useTempInitNetwork,
} from "@/lib/store/store";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import useTokenData from "@/hooks/useTokenData";

const InitialInput = () => {
  const { tokeninput, tokenname, tokenIcon, setData } = useInitialData(
    (state) => state
  );
  const { chain } = useNetwork();

  const { isConnected } = useAccount();

  const {
    networkname: initNetworkName,
    networkicon: initNetworkIcon,
    setNetwork: setInitNetwork,
  } = useInitialNetwork((state) => state);

  const { networkname: tempInitNetworkName, setNetwork: setTempInitNetwork } =
    useTempInitNetwork((state) => state);

  const { networkdata, TokenData } = useTokenData(tempInitNetworkName);

  useEffect(() => {
    console.log(tempInitNetworkName);
    if (tempInitNetworkName === "Sepolia" || chain?.id === 11155111) {
      setInitNetwork("Sepolia", <EthIcon className="w-full max-w-[24px]" />);
      setTempInitNetwork("", "");
    } else if (
      tempInitNetworkName === "Binance Smart Chain" ||
      chain?.id === 97
    ) {
      setInitNetwork(
        "Binance Smart Chain",
        <BnbIcon className="w-full max-w-[24px]" />
      );
      setTempInitNetwork("", "");
    } else {
      setInitNetwork("", "");
      setTempInitNetwork("", "");
    }
  }, [chain?.id, isConnected, tempInitNetworkName]);

  // useEffect(() => {
  //   setData("", "", "");
  //   switch (initNetworkName) {
  //     case "Sepolia":
  //       return switchNetwork?.(97);
  //     case "Binance Smart Chain":
  //       return switchNetwork?.(11155111);
  //     case "Solana":
  //       return console.log(chain?.id);
  //     default:
  //       return switchNetwork?.(chain?.id);
  //   }
  // }, [initNetworkName]);

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white-8 bg-white-4 sm:bg-transparent p-4">
      <div className="flex flex-col sm:flex-row items-center gap-2 p-2 bg-dark-32 rounded-lg">
        <DropdownReusable
          datadropdown={networkdata}
          selectData={initNetworkName}
          setSelectData={setTempInitNetwork}
          title={"initial-network"}
          placeholder={"Network"}
          icon={initNetworkIcon}
          disable={isConnected === true ? false : true}
          disableKeys={"Solana"}
        />
        <DropdownReusable
          datadropdown={TokenData(initNetworkName)}
          selectData={tokenname}
          setSelectData={setData}
          title={"initial-token"}
          placeholder={"Token"}
          icon={tokenIcon}
          disable={initNetworkName !== "" ? false : true}
          disableKeys={""}
        />
      </div>

      <div className="flex flex-row gap-2 items-center px-2">
        <Input
          id={"token0"}
          placeholder={"0.00"}
          value={tokeninput}
          onChange={(
            value: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setData(tokenname, value, tokenIcon)}
          disabled={tokenname !== "" ? false : true}
        />
        <button className="subtitle uppercase text-secondary-100 px-4 py-2 rounded-lg border border-secondary-32 bg-secondary-12">
          max
        </button>
      </div>
      <TokenBalance dollars={0.0} balance={0.0} token={tokenname} />
    </div>
  );
};

export default InitialInput;
