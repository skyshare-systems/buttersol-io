"use client";
import DropdownReusable from "@/components/Dropdown";
import Input from "@/components/Input";
import TokenBalance from "@/components/TokenBalance";
import React, { useEffect } from "react";

import {
  useDestinationData,
  useDestinationNetwork,
  useInitialNetwork,
} from "@/lib/store/store";
import { useAccount } from "wagmi";
import useTokenData from "@/hooks/useTokenData";
import useToken1Data from "@/hooks/useToken1Data";

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

  useEffect(() => {
    setData("", 0.0, "", "");
    // if (initNetworkName === destinationNetworkName) {
    //   setDestinationNetwork("", "");
    // }
  }, [destinationNetworkName, initNetworkName]);

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white-8 bg-white-4 sm:bg-transparent p-4">
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
      <TokenBalance dollars={0.0} balance={0.0} token={tokenname} />
    </div>
  );
};

export default DestinationInput;
