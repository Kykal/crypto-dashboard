import { create } from "zustand";

//Types
import type { CoinMarket } from "../types/coins-markets";
export interface UseCryptos {
  data: CoinMarket[] | null;
  loading: boolean;
  error: any;
  setData: (
    data: Partial<Pick<UseCryptos, "data" | "loading" | "error">>
  ) => void;
}

const useCryptosStore = create<UseCryptos>()((set) => ({
  data: null,
  loading: true,
  error: null,
  setData: (data) => set(data),
}));

export default useCryptosStore;
