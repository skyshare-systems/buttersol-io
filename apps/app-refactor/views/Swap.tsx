import React from "react";

import SwapButton from "./SwapButton";

import SolanaSwap from "./SolanaSwap";

const Swap = () => {
  return (
    <div className="flex justify-center items-center my-16 px-4 xl:px-0">
      <div className="flex flex-col justify-center items-center gap-0 sm:gap-4">
        <SolanaSwap />
        <SwapButton />
      </div>
    </div>
  );
};

export default Swap;
