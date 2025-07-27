export const API_BASE_URL = "https://api.coingecko.com/api/v3" as const;

export const api = {
  coins: {
    markets: {
      path: `${API_BASE_URL}/coins/markets`,
    },
  },
} as const;

export const fetcher = (...args: any) =>
  fetch(...args).then((res) => res.json());

export enum SearchParam {
  CRYPTOS_HISTORY_FREQUENCY = "cryptos-history-frequency",
}
