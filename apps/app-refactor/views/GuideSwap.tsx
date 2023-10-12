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

const GuideSwap = () => {
  const { isConnected } = useAccount();

  const { stepGuide, setStepGuide } = useGuideSwap((state) => state);

  useEffect(() => {
    if (isConnected && stepGuide === 1) setStepGuide(2);
  }, [isConnected]);

  return (
    <>
      {stepGuide === 1 && <GuideStepOne />}
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
    </>
  );
};

export default GuideSwap;
