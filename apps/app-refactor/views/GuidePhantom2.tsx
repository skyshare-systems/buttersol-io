import { usePhantomGuide } from "@/lib/store/store";
import Image from "next/image";
import React from "react";
import HamburgerIcon from "@/public/icons/tutorial/hamburger-icon.svg";

const GuidePhantom2 = () => {
  const { stepPhantomGuide } = usePhantomGuide((state) => state);

  return (
    <>
      {stepPhantomGuide === 2 && (
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
                    stepPhantomGuide > 5 ? "text-white-72" : "text-white-32"
                  }`}
                >
                  / 05
                </span>
              </h1>
            </div>
            <h1 className="description text-white-100">
              <span className="flex flex-wrap gap-1 items-center">
                Click the hamburger icon{" "}
                <div className="p-0.5 rounded bg-white-8">
                  <HamburgerIcon />
                </div>{" "}
                on the top-left
              </span>
              of the popup.
            </h1>
          </div>
          <Image
            src={"/assets/phantom-tutorial/phantom-step-2.png"}
            alt={"PhantomStepTwo"}
            height={320}
            width={213.929}
            className="rounded-lg border border-white-16"
          />
        </>
      )}
    </>
  );
};

export default GuidePhantom2;
