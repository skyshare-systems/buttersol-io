"use client";
import React from "react";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import ETHIcon from "public/icons/swap/network/eth-icon.svg";
import ArrowSideUp from "public/icons/tutorial/arrow-side-up-icon.svg";
import BNBIcon from "public/icons/tutorial/binance-tutorial-icon.svg";
import SolanaIcon from "public/icons/tutorial/solana-tutorial-icon.svg";
import { useGuideSwap } from "@/lib/store/store";

const GuideStepTwo = () => {
  const { chain } = useNetwork();
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();
  const { stepGuide, setStepGuide } = useGuideSwap((state) => state);
  const { isConnected } = useAccount();

  return (
    <>
      <div className="flex flex-col gap-2">
        {chains.map((x) => (
          <button
            key={x.id}
            onClick={() => switchNetwork?.(x.id)}
            className={`p-2 ${
              chain?.name === x.name ? "bg-white-8" : "bg-white-4"
            } flex justify-between items-center gap-2 rounded-lg group duration-150 hover:bg-white-8 descriptions`}
          >
            {x.name === "Sepolia" && (
              <>
                <span className="flex items-center gap-2 text-white-100">
                  <ETHIcon className="w-full max-w-[16px]" />
                  Ethereum Sepolia Faucet
                </span>
              </>
            )}
            {x.name === "Binance Smart Chain Testnet" && (
              <span className="flex items-center gap-2 text-primary-100">
                <BNBIcon />
                Binance Smartchain Testnet
              </span>
            )}
            <ArrowSideUp
              className={`${
                chain?.name === x.name ? "opacity-100" : "opacity-50"
              }`}
            />
          </button>
        ))}
        <hr className="border border-white-16" />
        <button
          className={`p-2  flex justify-between items-center gap-2 rounded-lg group duration-150 hover:bg-white-8 descriptions`}
        >
          <span className="flex items-center gap-2 text-secondary-100">
            <SolanaIcon className="w-full max-w-[16px]" />
            Solana Devnet
          </span>
        </button>
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={() => setStepGuide(1)}
          className="p-2 rounded-lg description text-white-100"
        >
          Back
        </button>
        <button
          onClick={() => setStepGuide(3)}
          className={`${
            isConnected && stepGuide === 2
              ? "cursor-pointer hover:opacity-50"
              : "cursor-not-allowed"
          } px-4 py-2 rounded-lg bg-white-8 text-white-100`}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default GuideStepTwo;
