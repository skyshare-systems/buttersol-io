"use client";
import React from "react";
import { useGuideSwap } from "@/lib/store/store";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import ETHIcon from "public/icons/swap/network/eth-icon.svg";
import BNBIcon from "public/icons/tutorial/binance-tutorial-icon.svg";
import ArrowIcon from "public/icons/swap/arrow-icon.svg";
import TutorialStepIndicator from "@/components/TutorialStepIndicator";
import Link from "next/link";
import USDTIcon from "public/icons/swap/token/usdt-icon.svg";
import useMintToken from "@/hooks/useMintToken";

import ETHWhiteIcon from "@/public/icons/guide-3/eth-white-icon.svg";
import BNBWhiteIcon from "@/public/icons/guide-3/bnb-white-icon.svg";
import USDTWhiteIcon from "@/public/icons/guide-3/usdt-white-icon.svg";

import ETHYellowIcon from "@/public/icons/guide-3/eth-yellow-icon.svg";
import BNBYellowIcon from "@/public/icons/guide-3/bnb-yellow-icon.svg";
import USDTYellowIcon from "@/public/icons/guide-3/usdt-yellow-icon.svg";

const GuideStepThree = () => {
  const { stepGuide, setStepGuide } = useGuideSwap((state) => state);
  const { chain } = useNetwork();
  const { chains, switchNetwork } = useSwitchNetwork();
  const { isConnected } = useAccount();

  const {
    mintETHSepolia,
    mintBNBSepolia,
    mintUSDTSepolia,
    mintETHBSC,
    mintBNBBSC,
    mintUSDTBSC,
  } = useMintToken();

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-dark-50 backdrop-blur b z-[11] hidden lg:flex justify-center items-center ">
        <div className="flex flex-col p-4 gap-4 rounded-2xl border border-white-16 bg-white-4 max-w-[320px] w-screen backdrop-blur-[32px]">
          <TutorialStepIndicator title={"Claim testnet tokens."} />
          <div className="flex flex-col gap-2">
            <h1 className="subtext text-white-50">Faucet Tokens</h1>

            <Link
              href="https://sepoliafaucet.com/?fbclid=IwAR18Pw45z3qVKANX_y1KXYRifrmxHov6ofmngMBAqv7ebYcxDIeHHHHYLl4"
              target="_blank"
              className={`p-2  flex justify-between items-center gap-2 rounded-lg group duration-150 bg-white-4 hover:bg-white-8 descriptions group cursor-pointer`}
            >
              <span className="flex items-center gap-2 text-white-100">
                <ETHIcon className="w-full max-w-[16px]" />
                Ethereum Faucet
              </span>
              <ArrowIcon className="rotate-90 w-full max-w-[12px] opacity-50 group-hover:opacity-100" />
            </Link>
            <Link
              href="https://testnet.bnbchain.org/faucet-smart?fbclid=IwAR1oIqamLxv_02U5lAiBuBpW7ALbJ3SyrYR9QxTzwHoQNhuau56gMto6AFY"
              target="_blank"
              className={`p-2  flex justify-between items-center gap-2 rounded-lg group duration-150 bg-white-4 hover:bg-white-8 descriptions group cursor-pointer`}
            >
              <span className="flex items-center gap-2 text-primary-100">
                <BNBIcon className="w-full max-w-[16px]" />
                Binance Smartchain Faucet
              </span>
              <ArrowIcon className="rotate-90 w-full max-w-[12px] opacity-50 group-hover:opacity-100" />
            </Link>
          </div>
          <hr className="border border-white-16" />

          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <h1 className="subtext text-white-50">PEG Tokens</h1>
              <div className="rounded-2xl bg-black-100 p-2 gap-2 flex items-center">
                {chains.map((x) => (
                  <button
                    key={x.id}
                    onClick={() => switchNetwork?.(x.id)}
                    className={`p-2 ${
                      chain?.name === x.name ? "bg-white-8" : ""
                    } flex justify-between hover:bg-white-8 items-center gap-2 rounded-lg group duration-150  descriptions w-full`}
                  >
                    {x.name === "Sepolia" && (
                      <>
                        <span className="flex items-center gap-2 text-white-100">
                          <ETHIcon className="w-full max-w-[16px]" />
                          ETH
                        </span>
                      </>
                    )}
                    {x.name === "Binance Smart Chain Testnet" && (
                      <span className="flex items-center gap-2 text-primary-100">
                        <BNBIcon />
                        BSC
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {chain?.name === "Sepolia" && (
              <>
                <button
                  onClick={() => mintETHSepolia?.()}
                  className={` p-2 flex justify-between items-center gap-2 rounded-lg group duration-150 hover:bg-white-8 descriptions bg-white-4 group text-white-100`}
                >
                  <span className="flex items-center gap-2">
                    <ETHWhiteIcon className="w-full max-w-[16px]" />
                    1,000 ETH-PEG Tokens
                  </span>
                  <ArrowIcon className="rotate-90 w-full max-w-[12px] opacity-50 group-hover:opacity-100" />
                </button>

                <button
                  onClick={() => mintBNBSepolia?.()}
                  className={` p-2 flex justify-between items-center gap-2 rounded-lg group duration-150 hover:bg-white-8 descriptions bg-white-4 group text-white-100`}
                >
                  <span className="flex items-center gap-2">
                    <BNBWhiteIcon className="w-full max-w-[16px]" />
                    1,000 BNB-PEG Tokens
                  </span>
                  <ArrowIcon className="rotate-90 w-full max-w-[12px] opacity-50 group-hover:opacity-100" />
                </button>

                <button
                  onClick={() => mintUSDTSepolia?.()}
                  className={` p-2 flex justify-between items-center gap-2 rounded-lg group duration-150 hover:bg-white-8 descriptions bg-white-4 group text-white-100`}
                >
                  <span className="flex items-center gap-2">
                    <USDTWhiteIcon className="w-full max-w-[16px]" />
                    1,000 USDT-PEG Tokens
                  </span>
                  <ArrowIcon className="rotate-90 w-full max-w-[12px] opacity-50 group-hover:opacity-100" />
                </button>
              </>
            )}

            {chain?.name === "Binance Smart Chain Testnet" && (
              <>
                <button
                  onClick={() => mintETHBSC?.()}
                  className={` p-2 flex justify-between items-center gap-2 rounded-lg group duration-150 hover:bg-white-8 descriptions bg-white-4 group text-primary-100`}
                >
                  <span className="flex items-center gap-2">
                    <ETHYellowIcon className="w-full max-w-[16px]" />
                    1,000 ETH-PEG Tokens
                  </span>
                  <ArrowIcon className="rotate-90 w-full max-w-[12px] opacity-50 group-hover:opacity-100" />
                </button>

                <button
                  onClick={() => mintBNBBSC?.()}
                  className={` p-2 flex justify-between items-center gap-2 rounded-lg group duration-150 hover:bg-white-8 descriptions bg-white-4 group text-primary-100`}
                >
                  <span className="flex items-center gap-2">
                    <BNBYellowIcon className="w-full max-w-[16px]" />
                    1,000 BNB-PEG Tokens
                  </span>
                  <ArrowIcon className="rotate-90 w-full max-w-[12px] opacity-50 group-hover:opacity-100" />
                </button>

                <button
                  onClick={() => mintUSDTBSC?.()}
                  className={` p-2 flex justify-between items-center gap-2 rounded-lg group duration-150 hover:bg-white-8 descriptions bg-white-4 group text-primary-100`}
                >
                  <span className="flex items-center gap-2">
                    <USDTYellowIcon className="w-full max-w-[16px]" />
                    1,000 USDT-PEG Tokens
                  </span>
                  <ArrowIcon className="rotate-90 w-full max-w-[12px] opacity-50 group-hover:opacity-100" />
                </button>
              </>
            )}
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={() => setStepGuide(0)}
              className="p-2 rounded-lg description text-white-100"
            >
              Skip
            </button>
            <button
              onClick={() => setStepGuide(4)}
              className={`${
                isConnected && stepGuide === 3
                  ? "cursor-pointer hover:opacity-50"
                  : "cursor-not-allowed"
              } px-4 py-2 rounded-lg bg-white-8 text-white-100`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuideStepThree;
