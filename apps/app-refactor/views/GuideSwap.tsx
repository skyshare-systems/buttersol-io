"use client";
import { ConnectWallet } from "@/components/ConnectWallet";
import TutorialStepIndicator from "@/components/TutorialStepIndicator";
import { useGuideSwap } from "@/lib/store/store";
import React, { useEffect } from "react";
import { useAccount } from "wagmi";
import GuideStepTwo from "./GuideStepTwo";

const GuideSwap = () => {
  const { isConnected } = useAccount();
  const { stepGuide, setStepGuide } = useGuideSwap((state) => state);

  useEffect(() => {
    if (isConnected && stepGuide === 1) setStepGuide(2);
  }, [isConnected]);

  function handleNext() {
    if (stepGuide === 1 && isConnected) {
      setStepGuide(2);
    }
    if (stepGuide === 2 && isConnected) {
      setStepGuide(3);
    }
    if (stepGuide === 3) {
      setStepGuide(4);
    }
    if (stepGuide === 5) {
      setStepGuide(5);
    }
    if (stepGuide === 6) {
      setStepGuide(6);
    }
  }

  return (
    <>
      {stepGuide === 1 && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-dark-50 backdrop-blur  b z-[11]" />
          <div className="absolute top-0 right-0 z-[13] glow-button">
            <ConnectWallet />
          </div>
          <div className="absolute right-0 top-[7%] z-[12]">
            <div className="flex flex-col p-4 gap-4 rounded-2xl border border-white-16 bg-white-4 max-w-[320px] w-screen">
              <TutorialStepIndicator title={"Connect your wallet."} />
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setStepGuide(0)}
                  className="p-2 rounded-lg description text-white-100"
                >
                  Skip
                </button>
                <button
                  onClick={() => handleNext()}
                  className={`${
                    isConnected && stepGuide === 1
                      ? "cursor-pointer hover:opacity-50"
                      : "cursor-not-allowed"
                  } px-4 py-2 rounded-lg bg-white-8 text-white-100`}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {stepGuide === 2 && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-dark-50 backdrop-blur b z-[11] flex justify-center items-center">
            <div className="flex flex-col p-4 gap-4 rounded-2xl border border-white-16 bg-white-4 max-w-[320px] w-screen backdrop-blur-[32px]">
              <TutorialStepIndicator
                title={"Import testnet networks to your wallet."}
              />
              <GuideStepTwo />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default GuideSwap;
