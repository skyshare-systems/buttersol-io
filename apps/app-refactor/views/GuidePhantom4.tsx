import { usePhantomGuide } from "@/lib/store/store";
import Image from "next/image";
import React from "react";
import PhantomGuideStepIndicator from "@/components/PhantomGuideStepIndicator";

const GuidePhantom4 = () => {
  const { stepPhantomGuide } = usePhantomGuide((state) => state);

  return (
    <>
      {stepPhantomGuide === 4 && (
        <>
          <PhantomGuideStepIndicator
            title={
              "Scroll down a little and click the Developer Settings button"
            }
          />
          <Image
            src={"/assets/phantom-tutorial/phantom-step-4.png"}
            alt={"PhantomStepFour"}
            height={320}
            width={213.929}
            className="rounded-lg border border-white-16"
          />
        </>
      )}
    </>
  );
};

export default GuidePhantom4;
