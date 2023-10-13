"use client";
import TutorialStepIndicator from "@/components/TutorialStepIndicator";
import {
  useDestinationNetwork,
  useGuideSwap,
  useInitialData,
} from "@/lib/store/store";
import React, { useEffect } from "react";
import { useAccount } from "wagmi";
import Switch from "public/icons/swap/switch-icon.svg";

const GuideStepSeven = () => {
  const { isConnected } = useAccount();
  const { stepGuide, setStepGuide } = useGuideSwap((state) => state);
  const { networkname } = useDestinationNetwork((state) => state);
  const { tokenname, tokeninput } = useInitialData((state) => state);

  useEffect(() => {
    if (tokeninput === "" && stepGuide === 7) setStepGuide(6);
  }, [tokeninput]);

  return (
    <div className="absolute left-0 2xl:left-[11.5%] top-[45%] z-[12] hidden lg:block">
      <div className="flex flex-col p-4 gap-4 rounded-2xl border border-white-16 bg-white-4 min-w-[320px] max-w-[320px]">
        <TutorialStepIndicator
          title={
            "Verify how many estimated tokens you can receive in your choice of Destination Network and Token."
          }
        />

        <div className="p-4 rounded-lg border border-secondary-100 bg-white-4 flex flex-col w-full">
          <h1 className="subtext text-secondary-100">Tip:</h1>
          <h1 className="text-white-100 gap-2 w-full">
            <span className="descriptions flex items-center gap-1">
              You can click
              <div className="p-1 border-[0.5px] border-white-8 bg-dark-100 rounded-full">
                <Switch className="" />
              </div>
              when you want to
            </span>

            <span className="descriptions">
              swap Initial Network and Token to Destination Network and Token.
            </span>
          </h1>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={() => setStepGuide(0)}
            className="p-2 rounded-lg description text-white-100"
          >
            Skip
          </button>
          <button
            onClick={() => setStepGuide(8)}
            disabled={
              isConnected &&
              stepGuide === 7 &&
              networkname !== "" &&
              tokenname !== "" &&
              tokeninput !== ""
                ? false
                : true
            }
            className={`${
              isConnected &&
              stepGuide === 7 &&
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

export default GuideStepSeven;
