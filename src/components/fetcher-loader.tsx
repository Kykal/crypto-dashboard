import { api, fetcher, SearchParam } from "../constants";
import urlWithSearchParams from "../utils/urlWithSearchParams";

//ReactJS
import useSWR from "swr";
import { useSearchParams } from "react-router";
import useCryptosStore from "../store/use-cryptos-store";
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

  const cryptosHistoryFrequencySearchParam = searchParams.get(
    SearchParam.CRYPTOS_HISTORY_FREQUENCY
  );

  const setCryptos = useCryptosStore((state) => state.setData);

  const url = urlWithSearchParams(api.coins.markets.path, {
    vs_currency: "usd",
    order: "market_cap_desc",
    per_page: 10,
    page: 1,
    precision: 2,
    price_change_percentage: cryptosHistoryFrequencySearchParam ?? "24h",
  });

  const { data, error, isLoading } = useSWR(url, fetcher);

  useEffect(() => {
    setCryptos({
      data: null,
      error: null,
      loading: true,
    });
  }, [cryptosHistoryFrequencySearchParam]);

  useEffect(() => {
    setCryptos({
      data: data ?? null,
      error,
      loading: isLoading,
    });
  }, [data, error, isLoading]);

  return null;
};
