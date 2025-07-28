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

export type StatusUpdates = StatusUpdate[];

export type StatusUpdate = Record<string, any>;
