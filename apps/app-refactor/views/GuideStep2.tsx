"use client";
import React from "react";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import ETHIcon from "public/icons/swap/network/eth-icon.svg";
import ArrowSideUp from "public/icons/tutorial/arrow-side-up-icon.svg";
import BNBIcon from "public/icons/tutorial/binance-tutorial-icon.svg";
import SolanaIcon from "public/icons/tutorial/solana-tutorial-icon.svg";
import { useGuideSwap, usePhantomGuide } from "@/lib/store/store";
import TutorialStepIndicator from "@/components/TutorialStepIndicator";
import SolanaTutorialIcon from "@/public/icons/tutorial/solana-tutorial-icon.svg";
import GuidePhantom1 from "@/views/GuidePhantom1";
import GuidePhantom2 from "@/views/GuidePhantom2";
import GuidePhantom3 from "@/views/GuidePhantom3";
import GuidePhantom4 from "@/views/GuidePhantom4";
import GuidePhantom5 from "@/views/GuidePhantom5";
import ImportToken from "@/lib/utils/ImportToken";

import ImportETHWhite from "@/public/icons/guide-2/eth-import-white-icon.svg";
import ImportBNBWhite from "@/public/icons/guide-2/bnb-import-white-icon.svg";
import ImportUSDTWhite from "@/public/icons/guide-2/usdt-import-white-icon.svg";

import ImportETHYellow from "@/public/icons/guide-2/eth-import-yellow-icon.svg";
import ImportBNBYellow from "@/public/icons/guide-2/bnb-import-yellow-icon.svg";
import ImportUSDTYellow from "@/public/icons/guide-2/usdt-import-yellow-icon.svg";

const GuideStepTwo = () => {
  const { chain } = useNetwork();
  const { chains, switchNetwork } = useSwitchNetwork();
  const { stepGuide, setStepGuide } = useGuideSwap((state) => state);
  const { isConnected } = useAccount();
  const { stepPhantomGuide, setStepPhantomGuide } = usePhantomGuide(
    (state) => state
  );

  function handleClickNext() {
    if (stepPhantomGuide === 1) {
      setStepPhantomGuide(2);
    }
    if (stepPhantomGuide === 2) {
      setStepPhantomGuide(3);
    }
    if (stepPhantomGuide === 3) {
      setStepPhantomGuide(4);
    }
    if (stepPhantomGuide === 4) {
      setStepPhantomGuide(5);
    }
  }

  function handleClickBack() {
    if (stepPhantomGuide === 1) {
      setStepPhantomGuide(0);
    }
    if (stepPhantomGuide === 2) {
      setStepPhantomGuide(1);
    }
    if (stepPhantomGuide === 3) {
      setStepPhantomGuide(2);
    }
    if (stepPhantomGuide === 4) {
      setStepPhantomGuide(3);
    }
    if (stepPhantomGuide === 5) {
      setStepPhantomGuide(4);
    }
  }

  const tokensepoliadata = [
    {
      name: "ETH-PEG Token",
      icon: <ImportETHWhite className="w-full max-w-[16px]" />,
      address: "0xdc36F92a63A9a78B0175677F926dA3B2d01D745D",
      tokenSymbol: "ETH",
      tokenDecimal: 18,
    },
    {
      name: "BNB-PEG Token",
      icon: <ImportBNBWhite className="w-full max-w-[16px]" />,
      address: "0xB71Be8a3160E5B7B2a9919aa4b7059914601b785",
      tokenSymbol: "BNB",
      tokenDecimal: 18,
    },
    {
      name: "USDT-PEG Token",
      icon: <ImportUSDTWhite className="w-full max-w-[16px]" />,
      address: "0xf8Fa70AD19566C2D3D8c25717CdCbb257F5b59Ce",
      tokenSymbol: "USDT",
      tokenDecimal: 18,
    },
  ];

  const tokenbnbdata = [
    {
      name: "ETH-PEG Token",
      icon: <ImportETHYellow className="w-full max-w-[16px]" />,
      address: "0xc4B0605d23A4217b12aC4D5400cCBe5064d09EeF",
      tokenSymbol: "ETH",
      tokenDecimal: 18,
    },

    {
      name: "BNB-PEG Token",
      icon: <ImportBNBYellow className="w-full max-w-[16px]" />,
      address: "0x4A232629A6e7Db30C70750ff572284617824e0DB",
      tokenSymbol: "BNB",
      tokenDecimal: 18,
    },

    {
      name: "USDT-PEG Token",
      icon: <ImportUSDTYellow className="w-full max-w-[16px]" />,
      address: "0x09d6Ca1C9B51436a464F8241726e7FDCC713183b",
      tokenSymbol: "USDT",
      tokenDecimal: 18,
    },
  ];

  return (
    <>
      <div className="hidden lg:flex justify-center items-center fixed top-0 left-0 w-full h-full">
        <div
          className="fixed top-0 left-0 w-full h-full bg-dark-50 backdrop-blur b z-[11] hidden lg:flex justify-center items-center"
          onClick={() => setStepGuide(0)}
        />
        <div className="flex flex-col p-4 gap-4 rounded-2xl border border-white-16 bg-white-4 max-w-[320px] w-screen backdrop-blur-[32px] z-[12]">
          <TutorialStepIndicator
            title={"Import testnet networks and tokens to your wallet."}
          />
          <div className="flex flex-col gap-2">
            <h1 className="subtext text-white-50">Networks</h1>

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
              onClick={() => setStepPhantomGuide(1)}
              className={`p-2  flex justify-between items-center gap-2 rounded-lg group duration-150 hover:bg-white-8 descriptions`}
            >
              <span className="flex items-center gap-2 text-secondary-100">
                <SolanaIcon className="w-full max-w-[16px]" />
                Solana Devnet
              </span>
            </button>
            <hr className="border border-white-16" />
            <div className="flex flex-col gap-2">
              <h1 className="subtext text-white-50">Tokens</h1>
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
                {tokensepoliadata.map((data, index) => {
                  return (
                    <ImportToken
                      key={index}
                      name={data.name}
                      icon={data.icon}
                      address={data.address}
                      symbols={data.tokenSymbol}
                      decimal={18}
                      className={"text-white-100"}
                    />
                  );
                })}
              </>
            )}

            {chain?.name === "Binance Smart Chain Testnet" && (
              <>
                {tokenbnbdata.map((data, index) => {
                  return (
                    <ImportToken
                      key={index}
                      name={data.name}
                      icon={data.icon}
                      address={data.address}
                      symbols={data.tokenSymbol}
                      decimal={18}
                      className={"text-primary-100"}
                    />
                  );
                })}
              </>
            )}
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
        </div>
      </div>

      {stepPhantomGuide >= 1 && (
        <div className="fixed top-0 left-0 w-full h-full bg-dark-50 backdrop-blur b z-[12] hidden lg:flex justify-center items-center">
          <div className="flex flex-col gap-4 p-8 max-w-[433px] w-full border border-white-8 backdrop-blur bg-dark-50 rounded-2xl">
            <h1 className="title flex items-center gap-1">
              <span className="text-white-100">Activating</span>
              <span className="text-secondary-100 flex items-center gap-1">
                <SolanaTutorialIcon />
                Solana Devnet
              </span>
              <span className="text-white-100">on Phantom Wallet</span>
            </h1>

            <div className="flex flex-col justify-center items-center gap-4 p-4 rounded-2xl border border-white-8 bg-white-4">
              <GuidePhantom1 />
              <GuidePhantom2 />
              <GuidePhantom3 />
              <GuidePhantom4 />
              <GuidePhantom5 />
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={() => handleClickBack()}
                className="p-2 rounded-lg description text-white-100 descriptions"
              >
                Back
              </button>

              {stepPhantomGuide >= 5 ? (
                <button
                  onClick={() => setStepPhantomGuide(0)}
                  className={`px-4 py-2 rounded-lg bg-primary-100 text-dark-100 cursor-pointer hover:opacity-50 title`}
                >
                  Finish
                </button>
              ) : (
                <button
                  onClick={() => handleClickNext()}
                  className={`px-4 py-2 rounded-lg bg-white-8 text-white-100 cursor-pointer hover:opacity-50 descriptions`}
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GuideStepTwo;
