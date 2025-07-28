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
import { Group, Paper, Stack, Text, Title } from "@mantine/core";

//Types
import type { CoinsIdMarketChart } from "../../../types/coins-id-market-chart";
import type { LineChartSeries } from "@mantine/charts";

//Main component
const Chart = () => {
  const [searchParams] = useSearchParams();

  const selectedCrypto = searchParams.get(SearchParam.CRYPTO) ?? "";
  const selectedFrequency =
    searchParams.get(SearchParam.CRYPTO_HISTORY_FREQUENCY) ?? "7d";

  const url = urlWithSearchParams(
    api.coins.id(selectedCrypto).market_chart.path,
    {
      vs_currency: "usd",
      days: selectedFrequency,
      precision: 2,
    }
  );

  const { data: response, isLoading } = useSWR<CoinsIdMarketChart>(
    url,
    fetcher
  );

  if (isLoading) {
    return <Text ta="center">Loading...</Text>;
  }

  if ((response as any as { error: string })?.error) {
    return (
      <Text ta="center" c="red.7">
        Error
      </Text>
    );
  }

  if (!response) {
    return <Text ta="center">No data</Text>;
  }

  const data = response.prices.map((item) => ({
    timestamp: item[0],
    value: item[1],
  }));

  //Main render
  return (
    <Stack gap={10}>
      <Group>
        <Stack gap={0}>
          <Title order={2}>{selectedCrypto}</Title>
          <Text size="sm" c="dimmed">
            BTC
          </Text>
        </Stack>
      </Group>
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
        data={data}
        series={series}
      />
    </Stack>
  );
};

export default Chart; // Export main component

const series: LineChartSeries[] = [
  {
    name: "value",
    label: "Value",
  },
];
