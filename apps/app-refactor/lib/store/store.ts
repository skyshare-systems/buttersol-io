import { create } from "zustand";
import { ITokenData } from "../interface";

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
