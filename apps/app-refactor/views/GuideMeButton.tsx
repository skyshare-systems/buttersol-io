"use client";

import React from "react";
import { useGuideSwap } from "@/lib/store/store";
import GuideMe from "public/icons/swap/guide-me-icon.svg";
import { useAccount } from "wagmi";

const GuideMeButton = () => {
  const { stepGuide, setStepGuide } = useGuideSwap((state) => state);
  const { isConnected } = useAccount();

  function handleClickStep() {
    if (isConnected) {
      setStepGuide(2);
    } else {
      setStepGuide(1);
    }
    console.log(stepGuide);
  }

  return (
    <div
      className="fixed bottom-5 right-5 hidden lg:block text-white-100 z-[10] group "
      onClick={() => handleClickStep()}
    >
      <button className="relative rounded-full p-4 flex items-center gap-2 border border-white-16 bg-white-8  w-14 h-14 transition-all duration-150 ease-in-out hover:w-[135px]">
        <GuideMe className="w-full max-w-[22px] z-[11] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:relative group-hover:left-[0%] group-hover:-translate-x-[0%]" />
        <span className="opacity-0 group-hover:opacity-100 group-hover:transition group-hover:delay-200">
          Guide me
        </span>
      </button>
    </div>
  );
};

export default GuideMeButton;
