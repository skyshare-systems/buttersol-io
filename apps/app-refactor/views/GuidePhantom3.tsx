import { usePhantomGuide } from "@/lib/store/store";
import Image from "next/image";
import React from "react";
import SettingsIcon from "@/public/icons/tutorial/settings-icon.svg";

const GuidePhantom3 = () => {
  const { stepPhantomGuide } = usePhantomGuide((state) => state);

  return (
    <>
      {stepPhantomGuide === 3 && (
        <>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center justify-between">
              <h1 className="subtext">
                <span className="text-white-72">
                  {stepPhantomGuide > 10 ? "" : 0}
                  {stepPhantomGuide}{" "}
                </span>
                <span
                  className={`${
                    stepPhantomGuide > 3 ? "text-white-72" : "text-white-32"
                  }`}
                >
                  / 05
                </span>
              </h1>
            </div>
            <h1 className="description text-white-100">
              <span className="flex flex-wrap gap-1 items-center">
                Click the settings icon{" "}
                <div className="p-0.5 rounded bg-white-8">
                  <SettingsIcon />
                </div>{" "}
                on the bottom-left
              </span>
              of the popup.
            </h1>
          </div>
          <Image
            src={"/assets/phantom-tutorial/phantom-step-3.png"}
            alt={"PhantomStepThree"}
            height={320}
            width={213.929}
            className="rounded-lg border border-white-16"
          />
        </>
      )}
    </>
  );
};

export default GuidePhantom3;
