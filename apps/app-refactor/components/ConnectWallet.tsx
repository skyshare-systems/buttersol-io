"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import WalletIcon from "@/components/WalletIcon";
import WarningIcon from "public/icons/swap/warning-icon.svg";
import { useEffect } from "react";
import {
  useDestinationData,
  useDestinationNetwork,
  useGuideSwap,
  useInitialData,
  useInitialNetwork,
  useShowDetails,
  useSolanaAddress,
  useTempInitNetwork,
  useView,
} from "@/lib/store/store";
import { useAccount } from "wagmi";

export const ConnectWallet = () => {
  const { setStep } = useView((state) => state);
  // Init Data
  const { setData: setInitData } = useInitialData((state) => state);
  // Destination Data
  const { setData: setDestinationData } = useDestinationData((state) => state);
  const { setNetwork: setDestinationNetwork } = useDestinationNetwork(
    (state) => state
  );
  const { stepGuide } = useGuideSwap((state) => state);
  const { setSolanaAddress } = useSolanaAddress((state) => state);
  const { setShowDetails } = useShowDetails((state) => state);
  const { isConnected } = useAccount();

  useEffect(() => {
    setInitData("", "", "");
    setDestinationData("", "", "");
    setDestinationNetwork("", "");
    setSolanaAddress("");
    setShowDetails(false);
    setStep(1);
    // console.log(stepGuide);
  }, [isConnected]);

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className="bg-primary-100 text-black-100 title flex items-center gap-2 px-3 py-2 rounded-lg font-bold hover:opacity-50 duration-150"
                  >
                    <WalletIcon color={"#12202F"} /> Connect Wallet
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    className="px-3 py-2 flex justify-center items-center gap-3 text-white-100 bg-error-100 rounded-lg w-full title hover:opacity-50 duration-150"
                  >
                    <WarningIcon /> Wrong network
                  </button>
                );
              }
              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <button
                    onClick={openAccountModal}
                    type="button"
                    className="bg-primary-100 text-black-100 title flex items-center gap-2 px-3 py-2 rounded-lg font-bold hover:opacity-50 duration-150"
                  >
                    <WalletIcon color={"#12202F"} /> {account.displayName}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
