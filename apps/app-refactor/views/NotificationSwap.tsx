"use client";
import { useView } from "@/lib/store/store";
import React from "react";
import ConfirmSwap from "@/views/ConfirmSwap";
import SuccessSwap from "./SuccessSwap";
import SwitchNetwork from "./SwitchNetwork";
import InitialInput from "./InitialInput";
import DestinationInput from "./DestinationInput";
import SwapDetails from "./SwapDetails";
import SwapSkeleton from "@/components/SwapSkeleton";
import useMounted from "@/hooks/useMounted";

const NotificationSwap = () => {
  const { step } = useView((state) => state);
  const { hasMounted } = useMounted();

  if (!hasMounted) {
    return <SwapSkeleton />;
  }

  return (
    <>
      {" "}
      <div
        className={`flex flex-col justify-center items-center p-4 gap-4 backdrop-blur-sm rounded-3xl bg-opacity-0  max-w-[404px] grow`}
      >
        <div className="relative flex flex-col gap-2 w-full">
          <SwitchNetwork />
          <InitialInput />
          <DestinationInput />
        </div>
        <SwapDetails />
      </div>{" "}
      {step === 3 ? <SuccessSwap /> : <ConfirmSwap />}
    </>
  );
};

export default NotificationSwap;
