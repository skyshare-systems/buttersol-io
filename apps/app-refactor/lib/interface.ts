export interface ITokenData {
  tokeninput: any;
  tokenname: any;
  setData: (tokenname: any, tokeninput: any) => void;
}

export interface IDestinationData {
  tokeninput1: any;
  token1: any;
  setInitialData: (token1: any, tokeninput1: any) => void;
}

export interface INetwork {
  networkname: any;
  setNetwork: (networkname: any) => void;
}

export interface IIsOpen {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
