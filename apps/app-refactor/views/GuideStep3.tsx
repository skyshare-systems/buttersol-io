"use client";
import React from "react";
import { useGuideSwap } from "@/lib/store/store";
import { useAccount } from "wagmi";
import ETHIcon from "public/icons/swap/network/eth-icon.svg";
import BNBIcon from "public/icons/tutorial/binance-tutorial-icon.svg";
import ArrowIcon from "public/icons/swap/arrow-icon.svg";
import TutorialStepIndicator from "@/components/TutorialStepIndicator";

const GuideStepThree = () => {
  const { stepGuide, setStepGuide } = useGuideSwap((state) => state);
  const { isConnected } = useAccount();

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-dark-50 backdrop-blur b z-[11] hidden lg:flex justify-center items-center ">
        <div className="flex flex-col p-4 gap-4 rounded-2xl border border-white-16 bg-white-4 max-w-[320px] w-screen backdrop-blur-[32px]">
          <TutorialStepIndicator title={"Claim testnet tokens on faucets."} />
          <div className="flex flex-col gap-2">
            <a
              className={`p-2  flex justify-between items-center gap-2 rounded-lg group duration-150 bg-white-4 hover:bg-white-8 descriptions group`}
            >
              <span className="flex items-center gap-2 text-white-100">
                <ETHIcon className="w-full max-w-[16px]" />
                Ethereum Faucet
              </span>
              <ArrowIcon className="rotate-90 w-full max-w-[12px] opacity-50 group-hover:opacity-100" />
            </a>
            <a
              className={`p-2  flex justify-between items-center gap-2 rounded-lg group duration-150 bg-white-4 hover:bg-white-8 descriptions group`}
            >
              <span className="flex items-center gap-2 text-primary-100">
                <BNBIcon className="w-full max-w-[16px]" />
                Binance Smartchain Faucet
              </span>
              <ArrowIcon className="rotate-90 w-full max-w-[12px] opacity-50 group-hover:opacity-100" />
            </a>
          </div>
          <div className="flex justify-between items-center">
            <button
              onClick={() => setStepGuide(0)}
              className="p-2 rounded-lg description text-white-100"
            >
              Skip
            </button>
            <button
              onClick={() => setStepGuide(4)}
              className={`${
                isConnected && stepGuide === 3
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

export default GuideStepThree;
