import React, { useState } from "react";
import DropdownIcon from "public/icons/swap/dropdown-icon.svg";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import NetworkIcon from "public/icons/swap/network-icon.svg";
import TokenIcon from "public/icons/swap/token/token-icon.svg";
import { useInitialNetwork } from "@/lib/store/store";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";

interface IDropdown {
  datadropdown: any;
  selectData: any;
  setSelectData: any;
  title: string;
  placeholder: string;
  icon: any;
  disableKeys: any;
  disable: boolean;
}

export default function DropdownReusable({
  datadropdown,
  selectData,
  setSelectData,
  title,
  placeholder,
  icon,
  disable,
  disableKeys,
}: IDropdown) {
  function handleClick(name: string, icon: any) {
    if (placeholder === "Token") {
      setSelectData(name, "", icon);
    }
    if (placeholder !== "Token") {
      if (name === "Solana" && disableKeys) {
        console.log("Solana");
      } else {
        setSelectData(name, icon);
      }
    }
  }
  return (
    <div className="flex flex-col items-start justify-start w-full gap-2">
      {disable === false ? (
        <Dropdown placement="bottom-start">
          <DropdownTrigger
            className={`flex justify-start text-left w-full p-4 ${
              placeholder === "Token"
                ? "border border-white-8 rounded hover:bg-white-8"
                : "bg-white-4 hover:bg-white-8"
            } rounded outline-none duration-150 cursor-pointer`}
          >
            <button className="flex justify-between gap-2 items-center w-full cursor-pointer">
              {icon !== "" ? (
                icon
              ) : (
                <>
                  {placeholder === "Token" ? (
                    <TokenIcon className="w-full max-w-[1rem]" />
                  ) : (
                    <NetworkIcon className="w-full max-w-[1rem]" />
                  )}
                </>
              )}
              <input
                id={title}
                name={title}
                className={`flex justify-start w-full bg-dark-100 bg-opacity-0 description cursor-pointer text-white-100`}
                placeholder={placeholder}
                value={selectData}
                disabled
              />
              <div className="flex justify-end">
                <DropdownIcon className="w-full max-w-[1rem]" />
              </div>
            </button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="datadropdown"
            className={`flex flex-col w-full  
            ${placeholder === "Token" ? "max-w-[218px]" : "min-w-[218px]"} 
            gap-1 p-2 description border border-white-16 rounded-xl bg-dark-100 `}
            disabledKeys={[disableKeys]}
          >
            {datadropdown.map((data: any, index: any) => {
              return (
                <DropdownItem
                  textValue={data.name}
                  key={data.name}
                  aria-disabled
                  className={`description text-white-50 w-full p-2 rounded-lg capitalize duration-150 hover:bg-white-4 
                ${placeholder === "Token" ? "pr-[4rem]" : "pr-[0]"}`}
                  onClick={() => handleClick(data.name, data.icon)}
                >
                  <div className="flex flex-row items-center gap-2 cursor-not-allowed">
                    {data.icon} {data.name}
                  </div>
                </DropdownItem>
              );
            })}
          </DropdownMenu>
        </Dropdown>
      ) : (
        <div
          className={`flex justify-start items-center gap-2 text-left w-full p-4 cursor-not-allowed ${
            placeholder === "Token"
              ? "border border-white-8 rounded"
              : "bg-white-4 "
          } rounded outline-none duration-150 `}
        >
          {icon !== "" ? (
            icon
          ) : (
            <>
              {placeholder === "Token" ? (
                <TokenIcon className="w-full max-w-[1rem]" />
              ) : (
                <NetworkIcon className="w-full max-w-[1rem]" />
              )}
            </>
          )}
          <h1 className="bg-dark-100 bg-opacity-0 description text-white-50 w-full">
            {placeholder === "Token" ? "Token" : "Network"}
          </h1>

          <div className="flex justify-end">
            <DropdownIcon className="w-full max-w-[1rem]" />
          </div>
        </div>
      )}
    </div>
  );
}
