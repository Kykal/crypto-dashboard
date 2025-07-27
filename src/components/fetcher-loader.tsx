import useSWR from "swr";
import { useSearchParams } from "react-router";

import useCryptosStore from "../store/use-cryptos-store";
import { api, fetcher, SearchParam } from "../constants";
import urlWithSearchParams from "../utils/urlWithSearchParams";
import { useEffect } from "react";

/**
 * Fetch shared information.
 */
const FetcherLoader = () => {
  //Main render
  return (
    <>
      <CryptoStoreFetcher />
    </>
  );
};

export default FetcherLoader; // Export main component

const CryptoStoreFetcher = () => {
  const [searchParams] = useSearchParams();
  const { data: cryptos, setData: setCryptos } = useCryptosStore();

  const url = urlWithSearchParams(api.coins.markets.path, {
    vs_currency: "usd",
    order: "market_cap_desc",
    per_page: 10,
    page: 1,
    precision: 2,
    price_change_percentage:
      searchParams.get(SearchParam.CRYPTOS_HISTORY_FREQUENCY) ?? "24h",
  });

  const { data, error, isLoading } = useSWR(url, fetcher);

  useEffect(() => {
    setCryptos({
      data: [],
      error: null,
      loading: true,
    });
  }, [searchParams]);

  if (data && cryptos.length === 0) {
    setCryptos({
      data,
      error,
      loading: isLoading,
    });
  }

  if (error) {
    console.error(error);
  }

  return null;
};
