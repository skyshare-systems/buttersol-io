"use client";
import { useView } from "@/lib/store/store";
import React from "react";
import ConfirmSwap from "@/views/ConfirmSwap";
import SuccessSwap from "./SuccessSwap";
import ErrorSwap from "./ErrorSwap";

const NotificationSwap = () => {
  const { step } = useView((state) => state);

  return (
    <>
      {step === 3 ? (
        <SuccessSwap />
      ) : (
        // <ErrorSwap />
        <ConfirmSwap />
      )}
    </>
  );
};

export default NotificationSwap;
