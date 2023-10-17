import { create } from "zustand";
import {
  IApprove,
  IGuideSwap,
  IJsonRpcUrl,
  INetwork,
  INotification,
  IPhantomGuide,
  IShowDetails,
  ISolanaAddress,
  IStep,
  ITokenData,
} from "../interface";

export const useInitialData = create<ITokenData>((set) => ({
  tokeninput: "",
  tokenname: "",
  tokenIcon: "",
  tokenAddress: "",
  setData: (tokenname, tokeninput, tokenIcon, tokenAddress) => {
    set((state) => ({
      ...state,
      tokenname,
      tokeninput,
      tokenIcon,
      tokenAddress,
    }));
  },
}));

export const useDestinationData = create<ITokenData>((set) => ({
  tokeninput: "",
  tokenname: "",
  tokenIcon: "",
  tokenAddress: "",
  setData: (tokenname, tokeninput, tokenIcon, tokenAddress) => {
    set((state) => ({
      ...state,
      tokenname,
      tokeninput,
      tokenIcon,
      tokenAddress,
    }));
  },
}));

export const useInitialNetwork = create<INetwork>((set) => ({
  networkname: "",
  networkicon: "",
  address: "",
  factoryAddress: "",
  routerV2Address: "",
  setNetwork: (
    networkname,
    networkicon,
    address,
    factoryAddress,
    routerV2Address
  ) => {
    set((state) => ({
      ...state,
      networkname,
      networkicon,
      address,
      factoryAddress,
      routerV2Address,
    }));
  },
}));

export const useTempInitNetwork = create<INetwork>((set) => ({
  networkname: "",
  networkicon: "",
  address: "",
  factoryAddress: "",
  routerV2Address: "",
  setNetwork: (
    networkname,
    networkicon,
    address,
    factoryAddress,
    routerV2Address
  ) => {
    set((state) => ({
      ...state,
      networkname,
      networkicon,
      address,
      factoryAddress,
      routerV2Address,
    }));
  },
}));

export const useTempSwitchNetwork = create<INetwork>((set) => ({
  networkname: "",
  networkicon: "",
  address: "",
  factoryAddress: "",
  routerV2Address: "",
  setNetwork: (
    networkname,
    networkicon,
    address,
    factoryAddress,
    routerV2Address
  ) => {
    set((state) => ({
      ...state,
      networkname,
      networkicon,
      address,
      factoryAddress,
      routerV2Address,
    }));
  },
}));

export const useDestinationNetwork = create<INetwork>((set) => ({
  networkname: "",
  networkicon: "",
  address: "",
  factoryAddress: "",
  routerV2Address: "",
  setNetwork: (
    networkname,
    networkicon,
    address,
    factoryAddress,
    routerV2Address
  ) => {
    set((state) => ({
      ...state,
      networkname,
      networkicon,
      address,
      factoryAddress,
      routerV2Address,
    }));
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

export const usePhantomGuide = create<IPhantomGuide>((set) => ({
  stepPhantomGuide: 0,
  setStepPhantomGuide: (stepPhantomGuide) => {
    set((state) => ({ ...state, stepPhantomGuide }));
  },
}));

export const useShowDetails = create<IShowDetails>((set) => ({
  showDetails: false,
  setShowDetails: (showDetails) => {
    set((state) => ({ ...state, showDetails }));
  },
}));

export const useApprove = create<IApprove>((set) => ({
  isApprove: false,
  setIsApprove: (isApprove) => {
    set((state) => ({ ...state, isApprove }));
  },
}));

export const useCrossRPC = create<IJsonRpcUrl>((set) => ({
  RPC: "",
  setRPC: (RPC) => {
    set((state) => ({ ...state, RPC }));
  },
}));
