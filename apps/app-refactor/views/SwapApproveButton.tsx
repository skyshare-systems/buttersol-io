"use client";

import React from "react";
import useApproveToken from "@/hooks/useApproveToken";

const SwapApproveButton = () => {
  const { tokeninput, approveSpender, isSuccess, isLoadingApprove } =
    useApproveToken();

  return (
    <button
      onClick={() => approveSpender()}
      disabled={isLoadingApprove || tokeninput <= 0 ? true : false}
      className={`px-[18px] py-[19px] rounded-lg ${
        isLoadingApprove || tokeninput <= 0
          ? "bg-white-4 text-white-50 cursor-not-allowed"
          : "bg-white-100 text-dark-100 cursor-pointer hover:opacity-50"
      } w-full title font-bold duration-150`}
    >
      {isLoadingApprove ? "Approving..." : "Approve Wallet"}
    </button>
  );
};

export default SwapApproveButton;
