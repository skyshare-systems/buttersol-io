import React from "react";
import Image from "next/image";
import Link from "next/link";
import MetamaskIcon from "@/public/assets/no-wallet-extension/metamask-icon.svg";

const NoWalletExtension = () => {
  return (
    <div className="flex justify-center items-center w-full h-full text-white-100">
      <div className="relative flex justify-center items-center sm:mt-40 w-screen max-w-[31rem] grow py-16 px-8 flex-col gap-4">
        <Image
          src={"/assets/no-wallet-extension/crying-face-icon.png"}
          alt={"crying-face"}
          height={72}
          width={72}
        />
        <h1 className="heading5 text-white-100 text-center">Uh-oh.</h1>

        <h1 className="descriptions flex flex-col gap-2 text-white-100 text-center">
          <span>You have no wallet extensions on your browser.</span>
          <span>
            Please download the following wallets first to use the app.
          </span>
        </h1>

        <div className="flex flex-wrap justify-between items-center">
          <Link
            href={
              "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
            }
            target="_blank"
            className="rounded-lg flex items-center gap-2 py-2 px-3 bg-dark-100"
          >
            <div className="w-[16px] h-[16px] p-[3.33px] rounded-[2.667px] bg-primary-100">
              <MetamaskIcon />
            </div>
            <h1 className="underline underline-offset-1 text-primary-100 title">
              Download Metamask
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoWalletExtension;
