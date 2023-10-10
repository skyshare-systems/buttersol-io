import { create } from "zustand";
import { IIsOpen, INetwork, ISolanaAddress, ITokenData } from "../interface";

export const useInitialData = create<ITokenData>((set) => ({
  tokeninput: "",
  tokenname: "",
  tokenIcon: "",
  setData: (tokenname, tokeninput, tokenIcon) => {
    set((state) => ({ ...state, tokenname, tokeninput, tokenIcon }));
  },
}));

export const useDestinationData = create<ITokenData>((set) => ({
  tokeninput: "",
  tokenname: "",
  tokenIcon: "",
  setData: (tokenname, tokeninput, tokenIcon) => {
    set((state) => ({ ...state, tokenname, tokeninput, tokenIcon }));
  },
}));

export const useInitialNetwork = create<INetwork>((set) => ({
  networkname: "",
  networkicon: "",
  setNetwork: (networkname, networkicon) => {
    set((state) => ({ ...state, networkname, networkicon }));
  },
}));

export const useDestinationNetwork = create<INetwork>((set) => ({
  networkname: "",
  networkicon: "",
  setNetwork: (networkname, networkicon) => {
    set((state) => ({ ...state, networkname, networkicon }));
  },
}));

export const useModal = create<IIsOpen>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => {
    set((state) => ({ ...state, isOpen }));
  },
}));

export const useSolanaAddress = create<ISolanaAddress>((set) => ({
  solanaAddress: "",
  setSolanaAddress: (solanaAddress) => {
    set((state) => ({ ...state, solanaAddress }));
  },
}));
