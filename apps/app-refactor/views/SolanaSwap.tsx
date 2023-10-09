"use client";
import React, { useState } from "react";
import CancelIcon from "public/icons/swap/cancel-icon.svg";
import WalletIcon from "public/icons/swap/wallet-icon-white.svg";
import {
  useDestinationData,
  useDestinationNetwork,
  useInitialData,
  useInitialNetwork,
  useModal,
} from "@/lib/store/store";
import SwapDetails from "@/views/SwapDetails";
import SwitchNetwork from "./SwitchNetwork";
import InitialInput from "./InitialInput";
import DestinationInput from "./DestinationInput";

const SolanaSwap = () => {
  const { isOpen, setIsOpen } = useModal((state) => state);
  const { networkname: initNetworkName } = useInitialNetwork((state) => state);
  const { tokeninput, tokenname } = useInitialData((state) => state);

  const { tokeninput: tokenInputDestination, tokenname: tokenNameDestination } =
    useDestinationData((state) => state);
  const { networkname: destinationNetworkName } = useDestinationNetwork(
    (state) => state
  );

  const [walletAddress, setWalletAddress] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const el = e.target as HTMLInputElement;

    setWalletAddress(el.value);
  };

  return (
    <>
      {!isOpen ? (
        <>
          <div
            className={`flex flex-col justify-center items-center p-4 gap-4 backdrop-blur-sm rounded-3xl bg-opacity-0 sm:bg-white-4 max-w-[404px] grow`}
          >
            <div className="relative flex flex-col gap-2 w-full">
              <SwitchNetwork />
              <InitialInput />
              <DestinationInput />
            </div>
            <SwapDetails />
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center gap-4 p-4 rounded-3xl bg-white-4 max-w-[404px] sm:min-w-[404px] grow w-full">
          <div className="flex flex-wrap justify-between items-center gap-2 w-full p-2">
            <h1 className="title text-white-100">Confirm Swap</h1>
            <CancelIcon onClick={() => setIsOpen(false)} />
          </div>
          <div className="flex flex-col w-full gap-4 p-4 border border-white-8 rounded-2xl">
            <div className=" flex flex-col sm:flex-row justify-between items-center gap-2">
              {/* init network  */}
              <div className="flex flex-col gap-2 p-3 border border-white-4 rounded-lg w-full">
                <h1 className="subtitle text-white-100">{initNetworkName}</h1>
                <div className="flex flex-col gap-1">
                  <h1 className="title flex items-center gap-2 text-white-100">
                    {tokeninput} {tokenname}
                  </h1>
                </div>
              </div>
              {/* destination network  */}
              <div className="flex flex-col gap-2 p-3 border border-white-4 rounded-lg w-full">
                <h1 className="subtitle text-white-100">
                  {destinationNetworkName}
                </h1>
                <div className="flex flex-col gap-1">
                  <h1 className="title flex items-center gap-2 text-white-100">
                    {tokenInputDestination} {tokenNameDestination}
                  </h1>
                </div>
              </div>
            </div>
            <h1 className="subtext text-white-50">Input destination address</h1>
            <div className="p-3 flex flex-row gap-2 items-center border border-white-8 bg-white-4 rounded-lg">
              <WalletIcon />
              <input
                id={"wallet-address"}
                type="text"
                placeholder={"Your solana wallet address"}
                value={walletAddress}
                className={` block w-full font-[manrope] description text-white-100 bg-dark-100 outline-none bg-opacity-0`}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <SwapDetails />
        </div>
      )}
    </>
  );
};

export default SolanaSwap;
