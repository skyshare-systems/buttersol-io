"use client";
import DropdownReusable from "@/components/Dropdown";
import Input from "@/components/Input";
import TokenBalance from "@/components/TokenBalance";
import React, { useEffect } from "react";

import {
  useCrossRPC,
  useDestinationData,
  useDestinationNetwork,
  useInitialNetwork,
} from "@/lib/store/store";
import { useAccount } from "wagmi";
import useTokenData from "@/hooks/useTokenData";
import useToken1Data from "@/hooks/useToken1Data";
import useBalanceOf from "@/hooks/useBalanceOf";

const DestinationInput = () => {
  const { tokeninput, tokenname, tokenIcon, tokenAddress, setData } =
    useDestinationData((state) => state);

  const { isConnected } = useAccount();

  const {
    networkname: destinationNetworkName,
    setNetwork: setDestinationNetwork,
    networkicon: networkDestinationIcon,
  } = useDestinationNetwork((state) => state);

  const { networkname: initNetworkName } = useInitialNetwork((state) => state);
  const { TokenData, networkArray } = useTokenData(initNetworkName);

  useToken1Data();

  const { setRPC } = useCrossRPC((state) => state);

  const { balanceOf1 } = useBalanceOf();

  useEffect(() => {
    setData("", 0.0, "", "");

    switch (destinationNetworkName) {
      case "Binance Smart Chain":
        return setRPC("https://bsc-testnet.publicnode.com");
      case "Sepolia":
        return setRPC(
          "https://eth-sepolia.g.alchemy.com/v2/s-hdjLqITCIC-0yx948QMzzi7v-43Sss"
        );
      case "Solana":
        return setRPC("");
      default:
        return setRPC("");
    }
  }, [destinationNetworkName, initNetworkName]);

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white-8 bg-white-4 sm:bg-transparent p-4">
      {/* <button onClick={() => console.log(RPC + " testing")}>asdasd</button> */}
      <div className="flex flex-col sm:flex-row items-center gap-2 p-2 bg-dark-32 rounded-lg">
        <DropdownReusable
          datadropdown={networkArray}
          selectData={destinationNetworkName}
          setSelectData={setDestinationNetwork}
          title={"destination-network"}
          placeholder={"Network"}
          icon={networkDestinationIcon}
          disable={isConnected === true ? false : true}
          disableKeys={""}
        />

        <DropdownReusable
          datadropdown={TokenData(initNetworkName)}
          selectData={tokenname}
          setSelectData={setData}
          title={"destination-token"}
          placeholder={"Token"}
          icon={tokenIcon}
          disable={destinationNetworkName !== "" ? false : true}
          disableKeys={""}
        />
      </div>

      <div className="flex flex-row gap-2 items-center px-2 text-white-100">
        <Input
          id={"token1"}
          placeholder={"0.00"}
          value={tokeninput}
          disabled
          onChange={(
            value: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setData(tokenname, tokeninput, tokenIcon, tokenAddress)}
        />
      </div>
      <TokenBalance dollars={0.0} balance={balanceOf1 ?? 0} token={tokenname} />
    </div>
  );
};

export default DestinationInput;
