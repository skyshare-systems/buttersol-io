import React, { useState } from "react";
import DropdownIcon from "public/icons/swap/dropdown-icon.svg";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

interface IDropdown {
  datadropdown: any;
  selectData: any;
  setSelectData: any;
  title: string;
  placeholder: string;
  icon: any;
}

export default function DropdownReusable({
  datadropdown,
  selectData,
  setSelectData,
  title,
  placeholder,
  icon,
}: IDropdown) {
  const [selectedIcon, setSelectedIcon] = useState<any>(null);

  function handleClick(name: string, icon: any) {
    if (placeholder === "Token") {
      setSelectData(name, "");
    } else {
      setSelectData(name);
    }
    setSelectedIcon(icon);
  }
  return (
    <div className="flex flex-col items-start justify-start w-full gap-2">
      <Dropdown placement="bottom-start">
        <DropdownTrigger
          disabled
          className={`flex justify-start text-left w-full p-4 ${
            placeholder === "Token"
              ? "border border-white-8 rounded hover:bg-white-8"
              : "bg-white-4 hover:bg-white-8"
          } rounded outline-none duration-150 cursor-pointer`}
        >
          <button className="flex justify-between gap-2 items-center w-full cursor-pointer">
            {selectedIcon !== null ? selectedIcon : icon}
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
          gap-1 p-2 description border border-white-16 rounded-xl bg-dark-100`}
        >
          {datadropdown.map((data: any, index: any) => {
            return (
              <DropdownItem
                textValue={data.name}
                key={index}
                className={`description text-white-50 w-full p-2 rounded-lg capitalize duration-150 hover:bg-white-4 
                ${placeholder === "Token" ? "pr-[4rem]" : "pr-[0]"}`}
                onClick={() => handleClick(data.name, data.icon)}
              >
                <div className="flex flex-row items-center gap-2">
                  {data.icon} {data.name}
                </div>
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
