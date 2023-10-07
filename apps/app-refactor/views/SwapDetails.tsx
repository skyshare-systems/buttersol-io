"use client";
import React, { useState } from "react";
import ApproxEqualIcon from "public/icons/swap/approximately-equal-icon.svg";
import GasIcon from "public/icons/swap/gas-icon.svg";
import DropdownIcon from "public/icons/swap/arrow-icon.svg";
import DataDetails from "@/components/DataDetails";
import { useDestinationData, useInitialData } from "@/lib/store/store";

const SwapDetails = () => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const { tokeninput, tokenname } = useInitialData((state) => state);
  const { tokeninput: tokenInputOne, tokenname: tokenNameOne } =
    useDestinationData((state) => state);

  return (
    <>
      {tokeninput > 0 && (
        <div
          onClick={() => setShowDetails(!showDetails)}
          className={`flex flex-col w-full px-4 py-3 ${
            showDetails && "bg-white-4"
          } rounded-xl gap-3`}
        >
          <div className="flex flex-wrap justify-between items-center gap-2">
            <div>
              <h1 className="flex flex-wrap gap-1 items-center w-full">
                <span className="subtitle text-white-72 flex flex-wrap gap-1 items-center">
                  {tokeninput} {tokenname} <ApproxEqualIcon /> {tokenInputOne}{" "}
                  {tokenNameOne}
                </span>
                <span className="subtext text-white-32">${0.79}</span>
              </h1>
            </div>

            <div className="flex flex-wrap gap-1 items-center">
              <div className=" items-center gap-1 hidden sm:flex">
                <GasIcon />
                <h1 className="subtitle text-white-72">$ {54.81}</h1>
              </div>
              <DropdownIcon
                className={`${
                  !showDetails && "rotate-180"
                }  w-full max-w-[10px]`}
              />
            </div>
          </div>
          {/* details  */}
          {showDetails && (
            <div className="flex flex-col w-full gap-2">
              <hr className="opacity-10" />
              <div className="flex flex-col w-full gap-1">
                <DataDetails
                  title={"Initial swap fee"}
                  subTitle={""}
                  value={24.18}
                />
                <DataDetails title={"Bridge fee"} subTitle={""} value={4.92} />
                <DataDetails
                  title={"Final swap fee"}
                  subTitle={""}
                  value={13.28}
                />
                <DataDetails
                  title={"Platform fee"}
                  subTitle={"0.01%"}
                  value={3.81}
                />
              </div>
              <hr className="opacity-10" />
              <DataDetails
                title={"Minimum amount"}
                subTitle={""}
                value={217.94 + " LINK"}
              />
              <DataDetails
                title={"Expected amount"}
                subTitle={""}
                value={236.77 + " LINK"}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SwapDetails;
