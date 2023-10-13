"use client";
import { useGuideSwap } from "@/lib/store/store";
import React from "react";
import { useAccount } from "wagmi";
import TutorialStepIndicator from "@/components/TutorialStepIndicator";

const GuideStepTwelve = () => {
  const { isConnected } = useAccount();
  const { setStepGuide } = useGuideSwap((state) => state);

  return (
    <div
      className={`absolute left-0 2xl:left-[13.5%] bottom-[0%]  z-[12] hidden lg:block`}
    >
      <div className="flex flex-col p-4 gap-4 rounded-2xl border border-white-16 bg-white-4 max-w-[320px]">
        <div className="p-4 rounded-lg bg-white-4 flex flex-col">
          <h1 className="title text-primary-100">Congratulations!</h1>
          <h1 className="descriptions text-white-100">
            You’ve successfully used
          </h1>
          <h1 className="descriptions text-white-100">
            ButterSOL to swap your tokens.
          </h1>
        </div>

        <TutorialStepIndicator
          title={"Click Swap Again if you want to do another transaction."}
        />

        <div className="flex justify-end items-center">
          <button
            onClick={() => setStepGuide(0)}
            className={`${
              isConnected
                ? "cursor-pointer hover:opacity-50"
                : "cursor-not-allowed"
            } px-4 py-2 rounded-lg bg-primary-100 text-dark-100 title`}
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuideStepTwelve;
