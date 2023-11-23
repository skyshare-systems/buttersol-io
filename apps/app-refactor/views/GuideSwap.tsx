"use client";

import { useGuideSwap } from "@/lib/store/store";
import React, { useEffect } from "react";
import { useAccount } from "wagmi";
import GuideStepOne from "@/views/GuideStep1";
import GuideStepTwo from "@/views/GuideStep2";
import GuideStepThree from "@/views/GuideStep3";
import GuideStepFour from "@/views/GuideStep4";
import GuideStepFive from "@/views/GuideStep5";
import GuideStepSix from "@/views/GuideStep6";
import GuideStepSeven from "@/views/GuideStep7";
import GuideStepEight from "@/views/GuideStep8";
import GuideStepNine from "@/views/GuideStep9";
import GuideStepTen from "@/views/GuideStep10";
import GuideStepEleven from "@/views/GuideStep11";
import GuideStepTwelve from "./GuideStep12";
import { ConnectWallet } from "@/components/ConnectWallet";
import TutorialStepIndicator from "@/components/TutorialStepIndicator";

const GuideSwap = () => {
  const { isConnected } = useAccount();

  const { stepGuide, setStepGuide } = useGuideSwap((state) => state);

  useEffect(() => {
    if (isConnected && stepGuide === 1) setStepGuide(2);
  }, [isConnected]);

  return (
    <>
      {stepGuide === 1 && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full bg-dark-50 backdrop-blur  z-[11] hidden lg:block"
            onClick={() => setStepGuide(0)}
          />
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
      )}
      <div className="flex justify-center items-center">
        {stepGuide === 2 && <GuideStepTwo />}
        {stepGuide === 3 && <GuideStepThree />}
        {stepGuide === 4 && <GuideStepFour />}
        {stepGuide === 5 && <GuideStepFive />}
        {stepGuide === 6 && <GuideStepSix />}
        {stepGuide === 7 && <GuideStepSeven />}
        {stepGuide === 8 && <GuideStepEight />}
        {stepGuide === 9 && <GuideStepNine />}
        {stepGuide === 10 && <GuideStepTen />}
        {stepGuide === 11 && <GuideStepEleven />}
        {stepGuide === 12 && <GuideStepTwelve />}
      </div>
    </>
  );
};

export default GuideSwap;
