"use client";
import React from "react";
import { usePhantomGuide } from "@/lib/store/store";
interface IPhantomTutorial {
  title: string;
}

const PhantomGuideStepIndicator = ({ title }: IPhantomTutorial) => {
  const { stepPhantomGuide } = usePhantomGuide((state) => state);

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex items-center justify-between">
        <h1 className="subtext">
          <span className="text-white-72">
            {stepPhantomGuide > 10 ? "" : 0}
            {stepPhantomGuide}{" "}
          </span>
          <span
            className={`${
              stepPhantomGuide === 5 ? "text-white-72" : "text-white-32"
            }`}
          >
            / 05
          </span>
        </h1>
      </div>
      <h1 className="description text-white-100">{title}</h1>
    </div>
  );
};

export default PhantomGuideStepIndicator;
