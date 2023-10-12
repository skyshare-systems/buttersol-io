"use client";
import React from "react";
import { useGuideSwap } from "@/lib/store/store";
import ArrowRightIcon from "public/icons/tutorial/arrow-right-icon.svg";
interface ITutorial {
  title: string;
}

const TutorialStepIndicator = ({ title }: ITutorial) => {
  const { stepGuide } = useGuideSwap((state) => state);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h1 className="subtext">
          <span className="text-white-72">
            {stepGuide > 10 ? "" : 0}
            {stepGuide}{" "}
          </span>
          <span
            className={`${
              stepGuide === 12 ? "text-white-72" : "text-white-32"
            }`}
          >
            / 12
          </span>
        </h1>
        {stepGuide > 3 && stepGuide < 12 ? <ArrowRightIcon /> : ""}
      </div>
      <h1 className="description text-white-100">{title}</h1>
    </div>
  );
};

export default TutorialStepIndicator;
