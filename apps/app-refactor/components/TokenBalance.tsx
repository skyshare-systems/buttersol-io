import React from "react";
import WalletIcon from "@/components/WalletIcon";

interface ITokenBalance {
  dollars: any;
  balance: any;
  token: string;
}

const TokenBalance = ({ dollars, balance, token }: ITokenBalance) => {
  return (
    <div className="flex flex-wrap justify-between items-center grow px-2">
      <h1 className="subtitle text-white-50">~$ {dollars.toFixed(2)}</h1>

      <h1 className="subtitle flex items-center gap-1">
        <WalletIcon color={"#F7F8F052"} />
        <span className="hidden sm:block text-white-32">Balance:</span>
        <span className="text-white-72">{balance + " " + token ?? ""}</span>
      </h1>
    </div>
  );
};

export default TokenBalance;
