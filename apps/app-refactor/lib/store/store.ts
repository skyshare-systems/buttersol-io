import { create } from "zustand";
import { IIsOpen, INetwork, ITokenData } from "../interface";

export const useInitialData = create<ITokenData>((set) => ({
  tokeninput: "",
  tokenname: "",
  setData: (tokenname, tokeninput) => {
    set((state) => ({ ...state, tokenname, tokeninput }));
  },
}));

export const useDestinationData = create<ITokenData>((set) => ({
  tokeninput: "",
  tokenname: "",
  setData: (tokenname, tokeninput) => {
    set((state) => ({ ...state, tokenname, tokeninput }));
  },
}));

export const useInitialNetwork = create<INetwork>((set) => ({
  networkname: "",
  setNetwork: (networkname) => {
    set((state) => ({ ...state, networkname }));
  },
}));

export const useDestinationNetwork = create<INetwork>((set) => ({
  networkname: "",
  setNetwork: (networkname) => {
    set((state) => ({ ...state, networkname }));
  },
}));

export const useModal = create<IIsOpen>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => {
    set((state) => ({ ...state, isOpen }));
  },
}));
