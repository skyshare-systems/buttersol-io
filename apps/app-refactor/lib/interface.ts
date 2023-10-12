export interface ITokenData {
  tokeninput: any;
  tokenname: any;
  tokenIcon: any;
  setData: (tokenname: any, tokeninput: any, tokenIcon: any) => void;
}
export interface INetwork {
  networkname: any;
  networkicon: any;
  setNetwork: (networkname: any, networkicon: any) => void;
}

export interface IStep {
  step: number;
  setStep: (step: number) => void;
}

export interface ISolanaAddress {
  solanaAddress: any;
  setSolanaAddress: (solanaAddress: any) => void;
}

export interface INotification {
  isShowModal: boolean;
  setIsShowModal: (isShowModal: boolean) => void;
}

export interface IGuideSwap {
  stepGuide: number;
  setStepGuide: (stepGuide: number) => void;
}

export interface IShowDetails {
  showDetails: boolean;
  setShowDetails: (showDetails: boolean) => void;
}
