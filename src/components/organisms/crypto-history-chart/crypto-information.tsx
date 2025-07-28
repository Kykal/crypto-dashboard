import dayjs from "dayjs";
import { numericFormatter } from "react-number-format";
import { api, fetcher, SearchParam } from "../../../constants";
import urlWithSearchParams from "../../../utils/urlWithSearchParams";

//ReactJS
import useSWR from "swr";
import { useSearchParams } from "react-router";

//MATERIAL DESIGN
//Components
import { LineChart } from "@mantine/charts";
import {
  Avatar,
  Group,
  Paper,
  Skeleton,
  Stack,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";

//Types
import type { CoinsIdMarketChart } from "../../../types/coins-id-market-chart";
import type { LineChartSeries } from "@mantine/charts";
import type { CoinId } from "../../../types/coins-id";
import { dynamicColor } from "../../../utils/dynamicIndicators";
interface GenericProps {
  crypto: string;
  frequency: string;
}

//Main component
const CryptoInformation = () => {
  const [searchParams] = useSearchParams();

  const crypto = searchParams.get(SearchParam.CRYPTO);
  const frequency =
    searchParams.get(SearchParam.CRYPTO_HISTORY_FREQUENCY) ?? "7d";

  if (!crypto) {
    return (
      <Text c="dimmed" ta="center">
        Select a crypto curency
      </Text>
    );
  }

  //Main render
  return (
    <Stack gap={10}>
      <BasicInformation crypto={crypto} frequency={frequency} />
      <CrypyoGraph crypto={crypto} frequency={frequency} />
    </Stack>
  );
};

export default CryptoInformation; // Export main component

const BasicInformation = (props: GenericProps) => {
  const { crypto } = props;

  const url = urlWithSearchParams(api.coins.id(crypto).path, {
    id: crypto,
    localization: false,
    tickers: false,
    community_data: false,
    developers_data: false,
    sparkline: false,
  });

  const { data, error, isLoading } = useSWR<CoinId>(url, fetcher);

  return (
    <>
      <Skeleton visible={isLoading}>
        <Group align="center" justify="space-between">
          <Group align="center">
            <Avatar src={data?.image.large} alt={data?.name} />
            <Stack gap={0}>
              <Title order={2}>{data?.name ?? "Crypto name"}</Title>
              <Text component="span" size="sm" c="dimmed">
                {data?.symbol.toUpperCase() ?? "Crypto symbol"}
              </Text>
            </Stack>
            <Tooltip label="Last 24 hours">
              <Group gap={5} align="center">
                <Text
                  component="span"
                  c={dynamicColor(data?.market_data.price_change_24h!)}
                >
                  {numericFormatter(
                    String(data?.market_data.price_change_24h),
                    {
                      thousandSeparator: " ",
                      fixedDecimalScale: true,
                      decimalScale: 2,
                    }
                  )}
                </Text>
                <Text
                  component="span"
                  c={dynamicColor(
                    data?.market_data.price_change_percentage_24h!
                  )}
                >
                  (
                  {numericFormatter(
                    String(data?.market_data.price_change_percentage_24h),
                    {
                      suffix: "%",
                      thousandSeparator: " ",
                      fixedDecimalScale: true,
                      decimalScale: 2,
                    }
                  )}
                  )
                </Text>
              </Group>
            </Tooltip>
          </Group>
          <Text size="xl" fw="bold">
            {numericFormatter(String(data?.market_data.current_price.usd), {
              thousandSeparator: " ",
              fixedDecimalScale: true,
              decimalScale: 2,
            })}
          </Text>
        </Group>
      </Skeleton>
    </>
  );
};

const CrypyoGraph = (props: GenericProps) => {
  const { crypto, frequency } = props;

  const url = urlWithSearchParams(api.coins.id(crypto).market_chart.path, {
    vs_currency: "usd",
    days: frequency,
    precision: 2,
  });

  const { data: response, isLoading } = useSWR<CoinsIdMarketChart>(
    url,
    fetcher
  );

  if (!isLoading && (response as any as { error: string })?.error) {
    return (
      <Text ta="center" c="red.7" h={300}>
        Error
      </Text>
    );
  }

  if (!isLoading && !response) {
    return (
      <Text ta="center" h={300}>
        No data
      </Text>
    );
  }

  const data = response?.prices.map((item) => ({
    timestamp: item[0],
    value: item[1],
  }));

  return (
    <Skeleton visible={isLoading}>
      <LineChart
        h={500}
        curveType="linear"
        valueFormatter={(value) =>
          numericFormatter(String(value), {
            thousandSeparator: " ",
            decimalScale: 2,
            fixedDecimalScale: true,
          })
        }
        xAxisProps={{
          tickFormatter: (value) => dayjs(value).format("YYYY-MM-DD"),
          type: "number",
          domain: ["dataMin", "dataMax"],
        }}
        yAxisProps={{
          domain: ["dataMin", "dataMax"],
        }}
        tooltipProps={{
          content: ({ label, payload }) => {
            if (!payload) {
              return null;
            }

            return (
              <Paper withBorder px="md" py="sm" shadow="md">
                <Text c="white" fw={500} mb={5}>
                  {dayjs(label).format("dddd, MMMM DD, YYYY")}
                </Text>
                <Text c="dimmed" size="xs" fw={500} mb={5}>
                  {dayjs(label).format("hh:mm:ss a")}
                </Text>
                <Text ta="right" fw="bold">
                  {numericFormatter(String(payload[0]?.value), {
                    thousandSeparator: " ",
                    fixedDecimalScale: true,
                    decimalScale: 2,
                  })}
                </Text>
              </Paper>
            );
          },
        }}
        dataKey="timestamp"
        data={data ?? []}
        series={series}
      />
    </Skeleton>
  );
};

const series: LineChartSeries[] = [
  {
    name: "value",
    label: "Value",
  },
];
