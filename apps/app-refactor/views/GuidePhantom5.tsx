import { usePhantomGuide } from "@/lib/store/store";
import Image from "next/image";
import React from "react";
import ToggleIcon from "@/public/icons/tutorial/toggle-icon.svg";

const GuidePhantom5 = () => {
  const { stepPhantomGuide } = usePhantomGuide((state) => state);

  return (
    <>
      {stepPhantomGuide === 5 && (
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
                    stepPhantomGuide === 5 ? "text-white-72" : "text-white-32"
                  }`}
                >
                  / 05
                </span>
              </h1>
            </div>
            <h1 className="description text-white-100">
              <span className="flex flex-wrap gap-1 items-center">
                Toggle the switch button{" "}
                <div className="p-0.5 rounded bg-white-8">
                  <ToggleIcon />
                </div>{" "}
                beside Testnet
              </span>
              to turn on Solana Devnet mode.
            </h1>
          </div>
          <Image
            src={"/assets/phantom-tutorial/phantom-step-5.png"}
            alt={"PhantomStepFive"}
            height={320}
            width={213.929}
            className="rounded-lg border border-white-16"
          />
        </>
      )}
    </>
  );
};

export default GuidePhantom5;
