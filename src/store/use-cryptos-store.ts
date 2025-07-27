import { create } from "zustand";

//Types
import type { Crypto } from "../types/coin";
export interface UseCryptos {
  data: Crypto[];
  loading: boolean;
  error: any;
  setData: (
    data: Partial<Pick<UseCryptos, "data" | "loading" | "error">>
  ) => void;
}

const useCryptosStore = create<UseCryptos>()((set) => ({
  data: [],
  loading: true,
  error: null,
  setData: (data) => set(data),
}));

export default useCryptosStore;
