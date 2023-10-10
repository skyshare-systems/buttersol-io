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

export interface IIsOpen {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export interface ISolanaAddress {
  solanaAddress: any;
  setSolanaAddress: (solanaAddress: any) => void;
}
