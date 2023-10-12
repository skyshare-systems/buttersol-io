"use client";
import { ConnectWallet } from "@/components/ConnectWallet";
import TutorialStepIndicator from "@/components/TutorialStepIndicator";
import { useGuideSwap } from "@/lib/store/store";
import React, { useEffect } from "react";
import { useAccount } from "wagmi";

const GuideStepOne = () => {
  const { isConnected } = useAccount();
  const { stepGuide, setStepGuide } = useGuideSwap((state) => state);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-dark-50 backdrop-blur  b z-[11] hidden lg:block" />
      <div className="absolute top-0 right-0 z-[13] glow-button hidden lg:block">
        <ConnectWallet />
      </div>
      <div className="absolute right-0 top-[7%] z-[12] hidden lg:block">
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
              onClick={() => setStepGuide(2)}
              disabled={isConnected && stepGuide === 1 ? false : true}
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
  );
};

export default GuideStepOne;
