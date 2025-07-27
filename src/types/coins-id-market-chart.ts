export interface CoinsIdMarketChart {
  prices: Prices[];
  market_caps: MarketCaps[];
  total_volumes: TotalVolumes[];
}

export type Prices = [
  /**
   * UNIX Timestmap.
   */
  number,
  number
];

export type MarketCaps = [
  /**
   * UNIX Timestmap.
   */
  number,
  number
];

export type TotalVolumes = [
  /**
   * UNIX Timestmap.
   */
  number,
  number
];
