"use client";
import React from "react";
import CancelIcon from "public/icons/swap/cancel-icon.svg";
import {
  useDestinationData,
  useDestinationNetwork,
  useInitialData,
  useInitialNetwork,
  useSolanaAddress,
  useView,
} from "@/lib/store/store";
import SwapDetails from "@/views/SwapDetails";
import useMounted from "@/hooks/useMounted";

const ConfirmSwap = () => {
  const { step, setStep } = useView((state) => state);

  const { networkname: initNetworkName, networkicon: initNetworkIcon } =
    useInitialNetwork((state) => state);
  const { tokeninput, tokenname } = useInitialData((state) => state);
  const { tokeninput: tokenInputDestination, tokenname: tokenNameDestination } =
    useDestinationData((state) => state);
  const {
    networkname: destinationNetworkName,
    networkicon: destinationNetworkIcon,
  } = useDestinationNetwork((state) => state);

  const { solanaAddress, setSolanaAddress } = useSolanaAddress(
    (state) => state
  );

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const el = e.target as HTMLInputElement;

    setSolanaAddress(el.value);
  };

  return (
    <>
      {step === 1 ? (
        <></>
      ) : (
        <div className="fixed top-0 left-0 h-full w-full flex justify-center items-center backdrop-blur">
          <div className="flex flex-col justify-center items-center gap-4 p-4 rounded-xl border border-white-16 bg-black-100 w-screen grow max-w-[404px] sm:min-w-[404px] mt-[6rem]">
            <div className="flex flex-wrap justify-between items-center gap-2 w-full p-2">
              <h1 className="title text-white-100">Confirm Swap</h1>
              <CancelIcon
                onClick={() => setStep(1)}
                className="cursor-pointer z-[12]"
              />
            </div>
            <div className="flex flex-col w-full  rounded-2xl h-full">
              <div className="relative flex flex-col sm:flex-row justify-between items-center gap-2 h-full w-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg border border-white-8 bg-black-100 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8.33301 12C8.33301 12 12.333 9.05407 12.333 8C12.333 6.94587 8.33301 4 8.33301 4"
                      stroke="#F0FFFF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.66703 12C3.66703 12 7.66699 9.05407 7.66699 8C7.66699 6.94587 3.66699 4 3.66699 4"
                      stroke="#F0FFFF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                {/* init network  */}
                <div className="flex flex-col gap-2 p-3 border border-white-4 rounded-lg w-full min-w-[148px] min-h-[90px] h-full">
                  <h1 className="subtitle text-white-100 flex items-center gap-2">
                    {initNetworkIcon}
                    {initNetworkName}
                  </h1>
                  <div className="flex flex-col gap-1">
                    <h1 className="title flex items-center gap-2 text-white-100">
                      {tokeninput} {tokenname}
                    </h1>
                  </div>
                </div>
                {/* destination network  */}
                <div className="flex flex-col gap-2 p-3 border border-white-4 rounded-lg w-full min-w-[148px]] min-h-[90px] h-full">
                  <h1 className="subtitle text-white-100 flex items-center gap-2">
                    {destinationNetworkIcon} {destinationNetworkName}
                  </h1>
                  <div className="flex flex-col gap-1">
                    <h1 className="title flex items-center gap-2 text-white-100">
                      {tokenInputDestination} {tokenNameDestination}
                    </h1>
                  </div>
                </div>
              </div>
              {/* {destinationNetworkName === "Solana" && (
              <>
                <h1 className="subtext text-white-50">
                  Input destination address
                </h1>
                <div className="p-3 flex flex-row gap-2 items-center border border-white-8 bg-white-4 rounded-lg">
                  <WalletIcon />
                  <input
                    id={"wallet-address"}
                    type="text"
                    placeholder={"Your solana wallet address"}
                    value={solanaAddress}
                    className={` block w-full font-[manrope] description text-white-100 bg-dark-100 outline-none bg-opacity-0`}
                    onChange={handleOnChange}
                  />
                </div>
              </>
            )} */}
            </div>
            <SwapDetails />
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmSwap;
