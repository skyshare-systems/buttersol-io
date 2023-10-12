"use client";
import {
  useDestinationNetwork,
  useGuideSwap,
  useInitialData,
} from "@/lib/store/store";
import React from "react";
import { useAccount } from "wagmi";
import TutorialStepIndicator from "@/components/TutorialStepIndicator";

const GuideStepEleven = () => {
  const { isConnected } = useAccount();
  const { stepGuide, setStepGuide } = useGuideSwap((state) => state);
  const { networkname } = useDestinationNetwork((state) => state);
  const { tokenname, tokeninput } = useInitialData((state) => state);

  return (
    <div
      className={`absolute left-0 2xl:left-[11.5%] bottom-[5%]  z-[12] hidden lg:block`}
    >
      <div className="flex flex-col p-4 gap-4 rounded-2xl border border-white-16 bg-white-4 max-w-[320px]">
        <TutorialStepIndicator
          title={
            "Click Continue Swapping button to proceed with the transaction."
          }
        />

        <div className="flex justify-between items-center">
          <button
            onClick={() => setStepGuide(0)}
            className="p-2 rounded-lg description text-white-100"
          >
            Skip
          </button>
          <button
            onClick={() => setStepGuide(12)}
            disabled={
              isConnected &&
              stepGuide === 11 &&
              networkname !== "" &&
              tokenname !== "" &&
              tokeninput !== ""
                ? false
                : true
            }
            className={`${
              isConnected &&
              stepGuide === 11 &&
              networkname !== "" &&
              tokenname !== "" &&
              tokeninput !== ""
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

export default GuideStepEleven;
