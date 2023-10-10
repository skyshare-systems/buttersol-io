"use client";
import React, { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import useMounted from "@/hooks/useMounted";
import WarningIcon from "public/icons/swap/warning-icon.svg";
import {
  useDestinationNetwork,
  useInitialData,
  useModal,
  useSolanaAddress,
} from "@/lib/store/store";
import ButtonSkeleton from "@/components/ButtonSkeleton";

const SwapButton = () => {
  const [isApprove, setIsApprove] = useState<boolean>(false);
  const { hasMounted } = useMounted();

  const { setIsOpen, isOpen } = useModal((state) => state);
  const { tokeninput } = useInitialData((state) => state);
  const { solanaAddress } = useSolanaAddress((state) => state);
  const { networkname: destinationNetworkName } = useDestinationNetwork(
    (state) => state
  );

  function handleClick() {
    setIsOpen(true);
  }

  if (!hasMounted) {
    return <ButtonSkeleton />;
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
                    {isApprove ? (
                      <>
                        {isOpen ? (
                          <button
                            onClick={() => alert("Success Swap")}
                            disabled={
                              destinationNetworkName === "Solana"
                                ? solanaAddress === ""
                                  ? true
                                  : false
                                : false
                            }
                            className={`px-[18px] py-[19px] rounded-lg ${
                              destinationNetworkName === "Solana" &&
                              solanaAddress === ""
                                ? "bg-white-4 text-white-50 cursor-not-allowed"
                                : "bg-primary-100 text-dark-100 cursor-pointer hover:opacity-50"
                            }  w-full title font-bold duration-150`}
                          >
                            Continue Swapping
                          </button>
                        ) : (
                          <div className="w-full px-4 sm:px-0">
                            <button
                              onClick={handleClick}
                              disabled={tokeninput <= 0 ? true : false}
                              className={`px-[18px] py-[19px] rounded-lg ${
                                tokeninput <= 0
                                  ? "bg-white-4 text-white-50 cursor-not-allowed"
                                  : "bg-primary-100 text-dark-100 cursor-pointer hover:opacity-50"
                              }  w-full title font-bold duration-150`}
                            >
                              Swap Now
                            </button>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="w-full px-4 sm:px-0">
                        <button
                          onClick={() => setIsApprove(true)}
                          disabled={tokeninput <= 0 ? true : false}
                          className={`px-[18px] py-[19px] rounded-lg ${
                            tokeninput <= 0
                              ? "bg-white-4 text-white-50 cursor-not-allowed"
                              : "bg-white-100 text-dark-100 cursor-pointer hover:opacity-50"
                          } w-full title font-bold duration-150`}
                        >
                          Approve Wallet
                        </button>
                      </div>
                    )}
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
