import { numericFormatter } from "react-number-format";
import { api, fetcher } from "../../../constants";
import urlWithSearchParams from "../../../utils/url-with-search-params";

//ReactJS
import useSWR from "swr";

//MATERIAL DESIGN
//Components
import { Avatar, Group, Stack, Table, Text } from "@mantine/core";

//Types
import type {
  CoinMarket,
  CoinMarketQueryParams,
} from "../../../types/coins-markets";
interface TableRowProps extends CoinMarket {}

//Main component
const PositiveTrendingTable = () => {
  //Main render
  return (
    <Table.ScrollContainer minWidth={550}>
      <Table highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Crypto</Table.Th>
            <Table.Th>Current price</Table.Th>
            <Table.Th>Trending</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <TableBody />
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
};

export default PositiveTrendingTable; // Export main component

const TableBody = () => {
  const url = urlWithSearchParams(api.coins.markets.path, {
    vs_currency: "usd",
    price_change_percentage: "24h",
    precision: "full",
    page: 1,
    per_page: 100,
    order: "market_cap_desc",
  } satisfies CoinMarketQueryParams);

  const {
    data: response,
    error,
    isLoading,
  } = useSWR<CoinMarket[]>(url, fetcher);

  if (error) {
    return (
      <Table.Tr h={64.6}>
        <Table.Td colSpan={2}>
          <Text ta="center" c="red.7" size="md">
            Error
          </Text>
        </Table.Td>
      </Table.Tr>
    );
  }

  if (isLoading) {
    return (
      <Table.Tr h={64.6}>
        <Table.Td colSpan={2}>
          <Text ta="center" c="dimmed" size="md">
            Loading
          </Text>
        </Table.Td>
      </Table.Tr>
    );
  }

  const data: CoinMarket[] =
    response
      ?.filter((item) => item.price_change_percentage_24h > 0)
      .sort(
        (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h
      )
      .slice(0, 5) ?? [];

  const items = data.map((item) => <TableRow key={item.name} {...item} />);

  return <>{items}</>;
};

const TableRow = (props: TableRowProps) => {
  return (
    <Table.Tr>
      <Table.Td>
        <Group>
          <Avatar src={props.image} alt={props.name} visibleFrom="xs" />

          <Stack gap={0}>
            <Text component="span">{props.name}</Text>
            <Text component="span" c="dimmed" size="sm" hiddenFrom="md">
              {props.symbol.toUpperCase()}
            </Text>
            <Text component="span" c="dimmed" visibleFrom="md">
              {props.symbol.toUpperCase()}
            </Text>
          </Stack>
        </Group>
      </Table.Td>
      <Table.Td>
        {numericFormatter(String(props.current_price), {
          thousandSeparator: " ",
          fixedDecimalScale: true,
        })}
      </Table.Td>
      <Table.Td>
        <Group gap={10}>
          <Text c="green.7">
            {numericFormatter(String(props.price_change_24h), {
              prefix: "+",
              thousandSeparator: " ",
              fixedDecimalScale: true,
            })}
          </Text>
          <Text c="green.7">
            (
            {numericFormatter(String(props.price_change_percentage_24h), {
              prefix: "+",
              suffix: "%",
            })}
            )
          </Text>
        </Group>
      </Table.Td>
    </Table.Tr>
  );
};
