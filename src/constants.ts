export const API_BASE_URL = "https://api.coingecko.com/api/v3" as const;

export const api = {
  coins: {
    markets: {
      path: `${API_BASE_URL}/coins/markets`,
    },
    id: (id: string) => ({
      path: `${API_BASE_URL}/coins/${id}`,
      market_chart: {
        path: `${API_BASE_URL}/coins/${id}/market_chart`,
      },
    }),
  },
} as const;

export const fetcher = (...args: any) =>
  fetch(...args, {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
    },
  }).then((res) => res.json());

export enum SearchParam {
  CRYPTO_HISTORY_FREQUENCY = "crypto-history-frequency",
  CRYPTOS_HISTORY_FREQUENCY = "cryptos-history-frequency",
  CRYPTO = "crypto",
}
