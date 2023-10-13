"use client";

import {
  useDestinationData,
  useDestinationNetwork,
  useGuideSwap,
  useInitialData,
  useInitialNetwork,
  useShowDetails,
  useSolanaAddress,
  useTempInitNetwork,
  useView,
} from "@/lib/store/store";
import React from "react";
import Lottie from "react-lottie";
import ErrorData from "@/public/lotties/error.json";
import Confetti from "@/public/lotties/confetti-bs.json";

const ErrorSwap = () => {
  const { step, setStep } = useView((state) => state);
  // Init Data
  const { setData: setInitData } = useInitialData((state) => state);
  const { setNetwork: setInitNetwork } = useInitialNetwork((state) => state);
  // Destination Data
  const { setData: setDestinationData } = useDestinationData((state) => state);
  const { setNetwork: setDestinationNetwork } = useDestinationNetwork(
    (state) => state
  );
  const { setStepGuide } = useGuideSwap((state) => state);
  const { setSolanaAddress } = useSolanaAddress((state) => state);
  const { setShowDetails } = useShowDetails((state) => state);
  const { setNetwork: setTempInitNetwork } = useTempInitNetwork(
    (state) => state
  );

  function handleSwapAgain() {
    setInitData("", "", "");
    setInitNetwork("", "");
    setTempInitNetwork("", "");
    setDestinationData("", "", "");
    setDestinationNetwork("", "");
    setSolanaAddress("");
    setShowDetails(false);
    setStep(1);
    setStepGuide(0);
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ErrorData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8 p-4 rounded-2xl bg-white-4 w-full max-w-[21rem]">
        <Lottie
          options={defaultOptions}
          height={72}
          width={120}
          isClickToPauseDisabled={true}
        />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="title text-white-100 text-center">
              Transaction failed.
            </h1>
            <p className="description text-center text-white-100">
              &#60;&#60; ERROR MESSAGE &#62;&#62;
            </p>
          </div>
          <hr className="border border-white-16" />
          <p className="subtext text-center">
            <span className="text-white-50">
              If the transaction is failed, the contract will automatically
              return your funds with fees deducted.
            </span>
            <span className="text-primary-100 underline underline-offset-1 cursor-pointer">
              Learn why.
            </span>
          </p>
        </div>
        <button
          onClick={() => handleSwapAgain()}
          className="py-[1.19rem] px-[1.12rem] rounded-lg title text-dark-100 bg-primary-100 hover:opacity-50 w-full"
        >
          Swap Again
        </button>
      </div>
    </>
  );
};

export default ErrorSwap;
