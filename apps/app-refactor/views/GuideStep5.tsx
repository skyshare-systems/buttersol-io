"use client";
import TutorialStepIndicator from "@/components/TutorialStepIndicator";
import {
  useDestinationData,
  useDestinationNetwork,
  useGuideSwap,
} from "@/lib/store/store";
import React from "react";
import { useAccount } from "wagmi";

const GuideStepFive = () => {
  const { isConnected } = useAccount();
  const { stepGuide, setStepGuide } = useGuideSwap((state) => state);
  const { networkname } = useDestinationNetwork((state) => state);
  const { tokenname } = useDestinationData((state) => state);

  return (
    <div className="absolute left-0 2xl:left-[11.5%] top-[48%] z-[12] hidden lg:block">
      <div className="flex flex-col p-4 gap-4 rounded-2xl border border-white-16 bg-white-4 min-w-[320px]">
        <TutorialStepIndicator
          title={"Select your Destination Network and Token."}
        />
        <div className="flex justify-between items-center">
          <button
            onClick={() => setStepGuide(0)}
            className="p-2 rounded-lg description text-white-100"
          >
            Skip
          </button>
          <button
            onClick={() => setStepGuide(6)}
            disabled={
              isConnected &&
              stepGuide === 5 &&
              networkname !== "" &&
              tokenname !== ""
                ? false
                : true
            }
            className={`${
              isConnected &&
              stepGuide === 5 &&
              networkname !== "" &&
              tokenname !== ""
                ? "cursor-pointer hover:opacity-50"
                : "cursor-not-allowed"
            } px-4 py-2 rounded-lg bg-white-8 text-white-100`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuideStepFive;
