export interface CoinMarketQueryParams {
  /**
   * target currency of coins and market data
   *
   * **refers to /simple/supported_vs_currencies
   */
  vs_currency: string;

  /**
   * coins' IDs, comma-separated if querying more than 1 coin.
   *
   * **refers to /coins/list
   */
  ids?: string;

  /**
   * coins’ names, comma-separated if querying more than 1 coin.
   */
  names?: string;

  /**
   * coins’ symbols, comma-separated if querying more than 1 coin.
   */
  symbols?: string;

  /**
   * for `symbols` lookups, specify `all` to include all matching tokens
   *
   * Default `top` returns top-ranked tokens (by market cap or volume)
   */
  include_tokens?: string;

  /**
   * filter based on coins’ category
   *
   * **refers to /coins/categories/list
   */
  category?: string;

  /**
   * sort result by field, default: market_cap_desc
   */
  order?:
    | "market_cap_asc"
    | "market_cap_desc"
    | "volume_asc"
    | "volume_desc"
    | "id_asc"
    | "id_desc";

  /**
   * total results per page, default: 100
   *
   * Valid values: 1..250
   */
  per_page?: number;

  /**
   * page through results, default: 1
   */
  page?: number;

  /**
   * include sparkline 7 days data, default: false
   */
  sparkline?: boolean;

  /**
   * include price change percentage timeframe, comma-separated if query more than 1 price change percentage timeframe
   *
   * Valid values: 1h, 24h, 7d, 14d, 30d, 200d, 1y
   */
  price_change_percentage?: string;

  /**
   * language background, default: en
   */
  locale?: string;

  /**
   * decimal place for currency price value
   */
  precision?:
    | "full"
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18;
}

export interface CoinMarket {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: Roi | null;
  last_updated: string;
}

export interface Roi {
  times: number;
  currency: string;
  percentage: number;
}
