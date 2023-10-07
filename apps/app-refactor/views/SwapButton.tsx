"use client";
import React, { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import useMounted from "@/hooks/useMounted";
import WarningIcon from "public/icons/swap/warning-icon.svg";
import {
  useDestinationData,
  useDestinationNetwork,
  useModal,
} from "@/lib/store/store";

const SwapButton = () => {
  const [isApprove, setIsApprove] = useState<boolean>(false);
  const { hasMounted } = useMounted();
  const { networkname: destinationNetworkName } = useDestinationNetwork(
    (state) => state
  );
  const { setIsOpen, isOpen } = useModal((state) => state);

  function handleClick() {
    if (destinationNetworkName === "Solana") {
      setIsOpen(true);
    } else {
      alert("success");
    }
  }

  if (!hasMounted) {
    return (
      <div className="w-full px-4 sm:px-0">
        <button className="px-[18px] py-[19px] rounded-lg bg-white-16 w-full title text-white-100 font-bold hover:opacity-50 duration-150">
          Loading...
        </button>
      </div>
    );
  }
  return (
    <>
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted && authenticationStatus !== "loading";
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === "authenticated");

          return (
            <>
              {(() => {
                if (!connected) {
                  return (
                    <div className="w-full px-4 sm:px-0">
                      <button
                        onClick={openConnectModal}
                        className="px-[18px] py-[19px] rounded-lg bg-white-16 w-full title text-white-100 font-bold hover:opacity-50 duration-150"
                      >
                        Connect Wallet
                      </button>
                    </div>
                  );
                }
                if (chain.unsupported) {
                  return (
                    <div className="w-full px-4 sm:px-0">
                      <button
                        onClick={openChainModal}
                        className="px-[18px] py-[19px] flex justify-center items-center gap-3 text-white-100 bg-error-100 rounded-lg w-full title hover:opacity-50 duration-150"
                      >
                        <WarningIcon /> Wrong network
                      </button>
                    </div>
                  );
                }
                return (
                  <>
                    <div className="w-full px-4 sm:px-0">
                      {isApprove ? (
                        <>
                          {isOpen ? (
                            <button
                              onClick={() => alert("Success Swap")}
                              className="px-[18px] py-[19px] rounded-lg bg-primary-100 w-full title text-dark-100 font-bold hover:opacity-50 duration-150"
                            >
                              Continue Swapping
                            </button>
                          ) : (
                            <button
                              onClick={handleClick}
                              className="px-[18px] py-[19px] rounded-lg bg-primary-100 w-full title text-dark-100 font-bold hover:opacity-50 duration-150"
                            >
                              Swap Now
                            </button>
                          )}
                        </>
                      ) : (
                        <button
                          onClick={() => setIsApprove(true)}
                          className="px-[18px] py-[19px] rounded-lg bg-white-100 w-full title text-dark-100 font-bold hover:opacity-50 duration-150"
                        >
                          Approve Wallet
                        </button>
                      )}
                    </div>
                  </>
                );
              })()}
            </>
          );
        }}
      </ConnectButton.Custom>
    </>
  );
};

export default SwapButton;
