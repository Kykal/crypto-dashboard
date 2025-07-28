export interface CoinId {
  id: string;
  symbol: string;
  name: string;
  web_slug: string;
  asset_platform_id: string | null;
  platforms: Platforms;
  detail_platforms: DetailPlatforms;
  block_time_in_minutes: number;
  hashing_algorithm: string;
  categories: string[];
  preview_listing: boolean;
  public_notice: string | null;
  additional_notices: string[];
  description: Description;
  links: Links;
  image: Image;
  country_origin: string;
  genesis_date: string;
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  watchlist_portfolio_users: number;
  market_cap_rank: number;
  market_data: MarketData;
  status_updates: StatusUpdates;
  last_updated: string;
}

export type Platforms = Record<string, string>;

export type DetailPlatforms = Record<string, DetailPlatform>;

export interface DetailPlatform {
  decimal_place: number | null;
  contract_address: string;
}

export type Description = Record<string, string>;

export interface Links {
  homepage: string[];
  whitepaper: string;
  blockchain_site: string[];
  official_forum_url: string[];
  chat_url: string[];
  announcement_url: string[];
  snapshot_url: string | null;
  twitter_screen_name: string;
  facebook_username: string;
  bitcointalk_thread_identifier: number | null;
  telegram_channel_identifier: string;
  subreddit_url: string;
  repos_url: ReposUrl;
}

export interface ReposUrl {
  github: string[];
  bitbucket: string[];
}

export interface Image {
  thumb: string;
  small: string;
  large: string;
}

export interface MarketData {
  current_price: MarketCurrencyValues;
  total_value_locked: null;
  mcap_to_tvl_ratio: null;
  fdv_to_tvl_ratio: null;
  roi: null;
  ath: MarketCurrencyValues;
  ath_change_percentage: MarketCurrencyValues;
  ath_date: MarketCurrencyValues<string>;
  atl: MarketCurrencyValues;
  atl_change_percentage: MarketCurrencyValues;
  atl_date: MarketCurrencyValues<string>;
  market_cap: MarketCurrencyValues;
  market_cap_rank: number;
  fully_diluted_valuation: MarketCurrencyValues;
  market_cap_fdv_ratio: number;
  total_volume: MarketCurrencyValues;
  high_24h: MarketCurrencyValues;
  low_24h: MarketCurrencyValues;
  price_change_24h: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d: number;
  price_change_percentage_14d: number;
  price_change_percentage_30d: number;
  price_change_percentage_60d: number;
  price_change_percentage_200d: number;
  price_change_percentage_1y: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  price_change_24h_in_currency: MarketCurrencyValues;
  price_change_percentage_1h_in_currency: MarketCurrencyValues;
  price_change_percentage_24h_in_currency: MarketCurrencyValues;
  price_change_percentage_7d_in_currency: MarketCurrencyValues;
  price_change_percentage_14d_in_currency: MarketCurrencyValues;
  price_change_percentage_30d_in_currency: MarketCurrencyValues;
  price_change_percentage_60d_in_currency: MarketCurrencyValues;
  price_change_percentage_200d_in_currency: MarketCurrencyValues;
  price_change_percentage_1y_in_currency: MarketCurrencyValues;
  market_cap_change_24h_in_currency: MarketCurrencyValues;
  market_cap_change_percentage_24h_in_currency: MarketCurrencyValues;
  total_supply: number;
  max_supply: number;
  max_supply_infinite: boolean;
  circulating_supply: number;
  last_updated: string;
}

export interface MarketCurrencyValues<T extends string | number = number> {
  aed: T;
  ars: T;
  aud: T;
  bch: T;
  bdt: T;
  bhd: T;
  bmd: T;
  bnb: T;
  brl: T;
  btc: T;
  cad: T;
  chf: T;
  clp: T;
  cny: T;
  czk: T;
  dkk: T;
  dot: T;
  eos: T;
  eth: T;
  eur: T;
  gbp: T;
  gel: T;
  hkd: T;
  huf: T;
  idr: T;
  ils: T;
  inr: T;
  jpy: T;
  krw: T;
  kwd: T;
  lkr: T;
  ltc: T;
  mmk: T;
  mxn: T;
  myr: T;
  ngn: T;
  nok: T;
  nzd: T;
  php: T;
  pkr: T;
  pln: T;
  rub: T;
  sar: T;
  sek: T;
  sgd: T;
  sol: T;
  thb: T;
  try: T;
  twd: T;
  uah: T;
  usd: T;
  vef: T;
  vnd: T;
  xag: T;
  xau: T;
  xdr: T;
  xlm: T;
  xrp: T;
  yfi: T;
  zar: T;
  bits: T;
  link: T;
  sats: T;
}

export type StatusUpdates = StatusUpdate[];

export type StatusUpdate = Record<string, any>;
