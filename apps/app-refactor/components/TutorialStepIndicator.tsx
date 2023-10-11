"use client";
import { useGuideSwap } from "@/lib/store/store";
import React from "react";

interface ITutorial {
  title: string;
}

const TutorialStepIndicator = ({ title }: ITutorial) => {
  const { stepGuide } = useGuideSwap((state) => state);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="subtext">
        <span className="text-white-72">
          {stepGuide > 10 ? "" : 0}
          {stepGuide}{" "}
        </span>
        <span
          className={`${stepGuide === 12 ? "text-white-72" : "text-white-32"}`}
        >
          / 12
        </span>
      </h1>
      <h1 className="description text-white-100">{title}</h1>
    </div>
  );
};

export default TutorialStepIndicator;
