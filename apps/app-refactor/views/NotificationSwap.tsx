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
import ConfirmSwap from "@/views/ConfirmSwap";
import Lottie from "react-lottie";
import SuccessData from "@/public/lotties/success.json";
import Confetti from "@/public/lotties/confetti-bs.json";

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
    animationData: SuccessData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const confettiOptions = {
    loop: false,
    autoplay: true,
    animationData: Confetti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      {step === 3 ? (
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
                  Your transaction is on its way!
                </h1>
                <p className="title text-center">
                  <span className="text-white-100">
                    Please wait for at least
                  </span>
                  <span className="text-primary-100 mx-1">~15 minutes</span>
                  <span className="text-white-100">
                    for the transaction to finish.
                  </span>
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
          <div className="fixed bottom-0 -z-[1]">
            <Lottie
              options={confettiOptions}
              height={1440}
              width={1024}
              isClickToPauseDisabled={true}
            />
          </div>
        </>
      ) : (
        <ConfirmSwap />
      )}
    </>
  );
};

export default NotificationSwap;
