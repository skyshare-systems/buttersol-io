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
import { useAccount, useNetwork } from "wagmi";
import useTokenData from "@/hooks/useTokenData";
import useBalanceOf from "@/hooks/useBalanceOf";
import useApproveToken from "@/hooks/useApproveToken";

const InitialInput = () => {
  const { tokeninput, tokenname, tokenIcon, tokenAddress, setData } =
    useInitialData((state) => state);
  const { chain } = useNetwork();
  const { isConnected, address: account } = useAccount();
  const {
    networkname: initNetworkName,
    networkicon: initNetworkIcon,
    setNetwork: setInitNetwork,
    address: quickRavenSwapAddress,
  } = useInitialNetwork((state) => state);
  const { networkname: tempInitNetworkName, setNetwork: setTempInitNetwork } =
    useTempInitNetwork((state) => state);
  const { networkdata, TokenData } = useTokenData(tempInitNetworkName);

  const { balanceOf0 } = useBalanceOf();

  const { getAllowance, allowance } = useApproveToken();

  useEffect(() => {
    if (tempInitNetworkName === "Sepolia" || chain?.id === 11155111) {
      setInitNetwork(
        "Sepolia",
        <EthIcon className="w-full max-w-[24px]" />,
        "0xE9e6fD5958703bc78900BA763302ca4042190FDa",
        "0x7E0987E5b3a30e3f2828572Bb659A548460a3003",
        "0xC532a74256D3Db42D0Bf7a0400fEFDbad7694008"
      );
      setTempInitNetwork("", "", "", "", "");
    } else if (
      tempInitNetworkName === "Binance Smart Chain" ||
      chain?.id === 97
    ) {
      setInitNetwork(
        "Binance Smart Chain",
        <BnbIcon className="w-full max-w-[24px]" />,
        "0x6e697d7E5864E74011365419D91fB51798d0c781",
        "0x46E9aD48575d08072E9A05a9BDE4F22973628A8E",
        "0xDE2Db97D54a3c3B008a097B2260633E6cA7DB1AF"
      );
      setTempInitNetwork("", "", "", "", "");
    } else {
      setInitNetwork("", "", "", "", "");
      setTempInitNetwork("", "", "", "", "");
    }

    const delayDebounceFn = setTimeout(() => {
      if (tokeninput > 0)
        getAllowance(chain?.id, tokenAddress, account, quickRavenSwapAddress);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [
    chain?.id,
    isConnected,
    tempInitNetworkName,
    initNetworkName,
    tokeninput,
  ]);

  console.log(allowance);

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white-8 bg-white-4  p-4">
      <div className="flex flex-col sm:flex-row items-center gap-2 p-2 rounded-lg">
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
          ) => setData(tokenname, value, tokenIcon, tokenAddress)}
          disabled={tokenname !== "" ? false : true}
        />
        <button
          onClick={() =>
            setData(tokenname, balanceOf0, tokenIcon, tokenAddress)
          }
          className="subtitle uppercase text-secondary-100 px-4 py-2 rounded-lg border border-secondary-32 bg-secondary-12"
        >
          max
        </button>
      </div>
      <TokenBalance dollars={0.0} balance={balanceOf0 ?? 0} token={tokenname} />
    </div>
  );
};

export default InitialInput;
