import React, { useEffect } from "react";
import Switch from "public/icons/swap/switch-icon.svg";
import {
  useDestinationNetwork,
  useInitialNetwork,
  useTempInitNetwork,
  useTempSwitchNetwork,
} from "@/lib/store/store";
import { useNetwork } from "wagmi";

const SwitchNetwork = () => {
  const {
    networkname: initNetworkName,
    networkicon: initNetworkIcon,
    setNetwork: setInitNetwork,
    address: initAddress,
    factoryAddress: initFactoryAddress,
    routerV2Address: initRouterV2Address,
  } = useInitialNetwork((state) => state);

  const {
    networkname: tempInitNetworkName,
    networkicon: tempInitIcon,
    setNetwork: setTempInitNetwork,
    address: tempInitAddress,
    factoryAddress: tempFactoryAddress,
    routerV2Address: tempRouterV2Address,
  } = useTempInitNetwork((state) => state);

  const {
    networkname: destinationNetworkName,
    setNetwork: setDestinationNetwork,
    networkicon: networkDestinationIcon,
    address: destinationNetworkAddress,
    factoryAddress: desNetworkFactoryAddress,
    routerV2Address: desRouterV2Address,
  } = useDestinationNetwork((state) => state);

  const {
    networkname: tempSwitchNameNetwork,
    setNetwork: setTempSwitchNetwork,
    networkicon: tempSwitchIconNetwork,
    address: tempSwitchAddress,
    factoryAddress: tempSwitchFactoryAddress,
    routerV2Address: tempSwitchRouterV2Address,
  } = useTempSwitchNetwork((state) => state);

  const { chain } = useNetwork();

  function handleSwitch() {
    if (destinationNetworkName !== "Solana") {
      setTempInitNetwork(
        destinationNetworkName,
        networkDestinationIcon,
        destinationNetworkAddress,
        desNetworkFactoryAddress,
        desRouterV2Address
      );
      setTempSwitchNetwork(
        initNetworkName,
        initNetworkIcon,
        initAddress,
        initFactoryAddress,
        initRouterV2Address
      );
    }
  }

  useEffect(() => {
    setInitNetwork(
      tempInitNetworkName,
      tempInitIcon,
      tempInitAddress,
      tempFactoryAddress,
      tempRouterV2Address
    );
    setDestinationNetwork(
      tempSwitchNameNetwork,
      tempSwitchIconNetwork,
      tempSwitchAddress,
      tempSwitchFactoryAddress,
      tempSwitchRouterV2Address
    );
  }, [chain?.id]);

  return (
    <>
      <div
        className={`${
          destinationNetworkName === "" && "hidden"
        } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 bg-dark-100 border border-white-8 rounded-full cursor-pointer`}
        onClick={() => handleSwitch()}
      >
        <Switch />
      </div>
      {/* <button onClick={() => handleClick()}>asdasd</button> */}
    </>
  );
};

export default SwitchNetwork;
