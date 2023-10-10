import React from "react";

import SwapButton from "@/views/SwapButton";

import ConfirmSwap from "@/views/ConfirmSwap";

const Swap = () => {
  return (
    <div className="flex justify-center items-center my-16 px-4 xl:px-0">
      <div className="flex flex-col justify-center items-center gap-0 sm:gap-4">
        <ConfirmSwap />
        <SwapButton />
      </div>
    </div>
  );
};

export default Swap;
