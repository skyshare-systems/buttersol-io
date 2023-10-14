"use client";

import React from "react";
import useApproveToken from "@/hooks/useApproveToken";

const SwapApproveButton = () => {
  const { tokeninput, approveSpender } = useApproveToken();

  return (
    <button
      onClick={() => approveSpender()}
      disabled={tokeninput <= 0 ? true : false}
      className={`px-[18px] py-[19px] rounded-lg ${
        tokeninput <= 0
          ? "bg-white-4 text-white-50 cursor-not-allowed"
          : "bg-white-100 text-dark-100 cursor-pointer hover:opacity-50"
      } w-full title font-bold duration-150`}
    >
      Approve Wallet
    </button>
  );
};

export default SwapApproveButton;
