// "use client";
import React, { useEffect, useState } from "react";
import SwapButton from "@/views/SwapButton";
import NotificationSwap from "./NotificationSwap";
import GuideMeButton from "./GuideMeButton";
import GuideSwap from "./GuideSwap";
import detectEthereumProvider from "@metamask/detect-provider";
import NoWalletExtension from "./NoWalletExtension";

const Swap = () => {
  // const [showSwap, setShowSwap] = useState<boolean>(false);

  // detectEthereumProvider().then((provider) => {
  //   if (provider && provider.isMetaMask) {
  //     // connect btn is initially disabled
  //     setShowSwap(true);
  //   } else {
  //     setShowSwap(false);
  //   }
  // });

  return (
    <>
      <div className="flex justify-center items-center w-full">
        <GuideMeButton />
        <div className="relative flex justify-center items-center sm:pb-40 py-24 sm:mt-8 sm:py-32 px-4 xl:px-0 max-w-[90rem] grow">
          <div className="flex flex-col justify-center items-center gap-0 sm:gap-4">
            <NotificationSwap />
            <SwapButton />
          </div>
          <GuideSwap />
        </div>
      </div>
      {/* {showSwap ? (
        <div className="flex justify-center items-center w-full">
          <GuideMeButton />
          <div className="relative flex justify-center items-center sm:pb-40 py-24 sm:mt-8 sm:py-32 px-4 xl:px-0 max-w-[90rem] grow">
            <div className="flex flex-col justify-center items-center gap-0 sm:gap-4">
              <NotificationSwap />
              <SwapButton />
            </div>
            <GuideSwap />
          </div>
        </div>
      ) : (
        <NoWalletExtension />
      )} */}
    </>
  );
};

export default Swap;
