import { create } from "zustand";
import {
  IGuideSwap,
  INetwork,
  INotification,
  ISolanaAddress,
  IStep,
  ITokenData,
} from "../interface";

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

export const useView = create<IStep>((set) => ({
  step: 1,
  setStep: (step) => {
    set((state) => ({ ...state, step }));
  },
}));

export const useSolanaAddress = create<ISolanaAddress>((set) => ({
  solanaAddress: "",
  setSolanaAddress: (solanaAddress) => {
    set((state) => ({ ...state, solanaAddress }));
  },
}));

export const useNotificationSwap = create<INotification>((set) => ({
  isShowModal: false,
  setIsShowModal: (isShowModal) => {
    set((state) => ({ ...state, isShowModal }));
  },
}));

export const useGuideSwap = create<IGuideSwap>((set) => ({
  stepGuide: 0,
  setStepGuide: (stepGuide) => {
    set((state) => ({ ...state, stepGuide }));
  },
}));
