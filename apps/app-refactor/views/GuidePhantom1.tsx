import PhantomGuideStepIndicator from "@/components/PhantomGuideStepIndicator";
import { usePhantomGuide } from "@/lib/store/store";
import Image from "next/image";
import React from "react";

const GuidePhantom1 = () => {
  const { stepPhantomGuide } = usePhantomGuide((state) => state);

  return (
    <>
      {stepPhantomGuide === 1 && (
        <>
          <PhantomGuideStepIndicator
            title={"Login to your Phantom Wallet extension"}
          />
          <Image
            src={"/assets/phantom-tutorial/phantom-step-1.png"}
            alt={"PhantomStepOne"}
            height={320}
            width={213.929}
            className="rounded-lg border border-white-16"
          />
        </>
      )}
    </>
  );
};

export default GuidePhantom1;
