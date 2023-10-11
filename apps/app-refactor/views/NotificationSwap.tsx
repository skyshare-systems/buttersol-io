"use client";
import {
  useDestinationData,
  useDestinationNetwork,
  useInitialData,
  useInitialNetwork,
  useSolanaAddress,
  useView,
} from "@/lib/store/store";
import React from "react";
import ConfirmSwap from "@/views/ConfirmSwap";

const NotificationSwap = () => {
  const { step, setStep } = useView((state) => state);
  // Init Data
  const { setData: setInitData } = useInitialData((state) => state);
  const { setNetwork: setInitNetwork } = useInitialNetwork((state) => state);
  // Destination Data
  const { setData: setDestinationData } = useDestinationData((state) => state);
  const { setNetwork: setDestinationNetwork } = useDestinationNetwork(
    (state) => state
  );
  const { setSolanaAddress } = useSolanaAddress((state) => state);

  function handleSwapAgain() {
    setInitData("", "", "");
    setInitNetwork("", "");

    setDestinationData("", "", "");
    setDestinationNetwork("", "");
    setSolanaAddress("");
    setStep(1);
  }
  return (
    <>
      {step === 3 ? (
        <button onClick={() => handleSwapAgain()}>Swap Again</button>
      ) : (
        <ConfirmSwap />
      )}
    </>
  );
};

export default NotificationSwap;
