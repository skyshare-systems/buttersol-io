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
  } = useInitialNetwork((state) => state);

  const {
    networkname: tempInitNetworkName,
    networkicon: tempInitIcon,
    setNetwork: setTempInitNetwork,
  } = useTempInitNetwork((state) => state);

  const {
    networkname: destinationNetworkName,
    setNetwork: setDestinationNetwork,
    networkicon: networkDestinationIcon,
  } = useDestinationNetwork((state) => state);

  const {
    networkname: tempSwitchNameNetwork,
    setNetwork: setTempSwitchNetwork,
    networkicon: tempSwitchIconNetwork,
  } = useTempSwitchNetwork((state) => state);

  const { chain } = useNetwork();

  function handleSwitch() {
    if (destinationNetworkName !== "Solana") {
      setTempInitNetwork(destinationNetworkName, networkDestinationIcon);
      setTempSwitchNetwork(initNetworkName, initNetworkIcon);
    }
  }

  useEffect(() => {
    setInitNetwork(tempInitNetworkName, tempInitIcon);
    setDestinationNetwork(tempSwitchNameNetwork, tempSwitchIconNetwork);
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
