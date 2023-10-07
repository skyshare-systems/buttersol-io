import React from "react";
import InitialInput from "./InitialInput";
import DestinationInput from "./DestinationInput";
import SwapButton from "./SwapButton";
import SwitchNetwork from "./SwitchNetwork";
import SwapDetails from "./SwapDetails";

const Swap = () => {
  return (
    <div className="flex justify-center items-center my-16 px-4 xl:px-0">
      <div className="flex flex-col justify-center items-center gap-0 sm:gap-4">
        <div className="flex flex-col justify-center items-center p-4 gap-4 backdrop-blur-sm rounded-3xl bg-opacity-0 sm:bg-white-4 max-w-[404px] grow">
          <div className="relative flex flex-col gap-2 w-full">
            <SwitchNetwork />
            <InitialInput />
            <DestinationInput />
          </div>
          <SwapDetails />
        </div>
        <SwapButton />
      </div>
    </div>
  );
};

export default Swap;
