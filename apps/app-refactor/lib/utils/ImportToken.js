import React from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import ArrowSideUp from "public/icons/tutorial/arrow-side-up-icon.svg";

// eslint-disable-next-line react/prop-types
const ImportToken = ({ name, icon, address, symbols, decimal, className }) => {
  const addToken = async () => {
    try {
      const provider = await detectEthereumProvider();
      if (!provider) {
        alert("Please install metamask to proceed");
      } else {
        await provider.request({
          method: "eth_requestAccounts",
        });
        await provider.request({
          method: "wallet_watchAsset",
          params: {
            type: "ERC20",
            options: {
              address,
              symbol: symbols,
              decimals: decimal,
            },
          },
        });
      }
    } catch {
      console.info("Unable to add the token");
    }
  };

  return (
    <button
      onClick={addToken}
      className={`${className} p-2 flex justify-between items-center gap-2 rounded-lg group duration-150 hover:bg-white-8 descriptions bg-white-4 group`}
    >
      <span className="flex items-center gap-2">
        {icon} {name}
      </span>
      <ArrowSideUp className="opacity-50 group-hover:opacity-100" />
    </button>
  );
};

export default ImportToken;
