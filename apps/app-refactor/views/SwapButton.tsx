"use client";
import React, { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import useMounted from "@/hooks/useMounted";
import WarningIcon from "public/icons/swap/warning-icon.svg";
import {
  useApprove,
  useCrossRPC,
  useDestinationData,
  useDestinationNetwork,
  useGuideSwap,
  useNotificationSwap,
  useSolanaAddress,
  useView,
} from "@/lib/store/store";
import ButtonSkeleton from "@/components/ButtonSkeleton";
import SwapApproveButton from "./SwapApproveButton";
import useApproveToken from "@/hooks/useApproveToken";
import useButterSwap from "@/hooks/useButterSwap";
import { ethers } from "ethers";
import { TokenABI } from "@/lib/abi";
import { env } from "process";
import { useAccount, Address } from "wagmi";
require("dotenv").config();

const SwapButton = () => {
  const { isApprove } = useApprove((state) => state);
  const { hasMounted } = useMounted();
  const { tokeninput } = useApproveToken();
  const { step, setStep } = useView((state) => state);
  const { solanaAddress } = useSolanaAddress((state) => state);

  const {
    networkname: destinationNetworkName,
    address: destinationTokenNetwork,
  } = useDestinationNetwork((state) => state);

  const { tokenAddress } = useDestinationData((state) => state);
  const { stepGuide, setStepGuide } = useGuideSwap((state) => state);
  const { setIsShowModal } = useNotificationSwap((state) => state);
  const { address: account } = useAccount();
  const [crossDesToken, setCrossDesToken] = useState<string>();

  const { RPC, setRPC } = useCrossRPC((state) => state);

  function handleClick() {
    setStep(2);
    if (stepGuide === 10) setStepGuide(11);
  }

  function handleConfirm() {
    if (!isErrorSwap) {
      writeButterSwap?.()
        .then(async (res) => {
          console.log(res);

          setStep(3);
          setIsShowModal(true);
          if (stepGuide === 11) {
            setStepGuide(12);
          }

          const provider = new ethers.providers.JsonRpcProvider(
            RPC // Destination Network
          );
          const signer = new ethers.Wallet(
            process.env.PRIVATE_KEY_TESTNET as string,
            provider
          );
          const contract = new ethers.Contract(
            crossDesToken as Address, // Cross Destination Token
            TokenABI,
            provider
          );

          contract
            .connect(signer)
            .transfer(account, ethers.utils.parseEther(String(tokeninput)));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  const { isErrorSwap, writeButterSwap, isLoadingSwap } = useButterSwap();

  useEffect(() => {
    switch (tokenAddress) {
      case "0x8a202Abd773F81f6C8CD22001F233B81BDD42328": // ETH - Sepolia
        return setCrossDesToken("0xCECB2c7F146326FBe8aeCE155c3B4d52Adc4b5A5"); // ETH - BSC
      case "0x70Af51cc35309a3ADd4D48e0e4632C6A7e1C5229": // BNB - SEPOLIA
        return setCrossDesToken("0xD16211AF6954C5765157bc4c8382d69e009A595B"); // BNB - BSC
      case "0x7a103E97298A3E628031498F9Ece2c9F8dfBcbeC": // USDT - SEPOLIA
        return setCrossDesToken("0x4611DeF17D35d909d585c6494A187D467387a855"); // USDT - BSC

      case "0xCECB2c7F146326FBe8aeCE155c3B4d52Adc4b5A5": // ETH - BSC
        return setCrossDesToken("0x8a202Abd773F81f6C8CD22001F233B81BDD42328"); // ETH - Sepolia
      case "0xD16211AF6954C5765157bc4c8382d69e009A595B": // BNB - BSC
        return setCrossDesToken("0x70Af51cc35309a3ADd4D48e0e4632C6A7e1C5229"); // BNB - SEPOLIA
      case "0x4611DeF17D35d909d585c6494A187D467387a855": // USDT - BSC
        return setCrossDesToken("0x7a103E97298A3E628031498F9Ece2c9F8dfBcbeC"); // USDT - SEPOLIA
    }
  }, [tokeninput, tokenAddress]);

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
            <div className="w-full relative z-[10]">
              {/* <button
                onClick={() => console.log(crossDesToken + " Testing Cross")}
              >
                asdasd
              </button> */}
              {(() => {
                if (!connected) {
                  return (
                    <div className="w-full px-4">
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
                    <div className="w-full px-4">
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
                    {isApprove === true ? (
                      <>
                        {step === 2 && (
                          <button
                            onClick={() => handleConfirm()}
                            disabled={
                              isLoadingSwap ||
                              (destinationNetworkName === "Solana" &&
                                solanaAddress === "") ||
                              isErrorSwap
                                ? true
                                : false
                            }
                            className={`px-[18px] py-[19px] rounded-lg ${
                              isLoadingSwap
                                ? "bg-white-4 text-white-50 cursor-not-allowed"
                                : "bg-primary-100 text-dark-100 cursor-pointer hover:opacity-50"
                            }  w-full title font-bold duration-150`}
                          >
                            {isLoadingSwap
                              ? "Swapping..."
                              : "Continue Swapping"}
                          </button>
                        )}
                        {step === 1 && (
                          <div className="w-full px-4 ">
                            <button
                              onClick={handleClick}
                              disabled={isErrorSwap ? true : false}
                              className={`px-[18px] py-[19px] rounded-lg ${
                                isErrorSwap
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
                      <div className="w-full px-4">
                        <SwapApproveButton />
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    </>
  );
};

export default SwapButton;
