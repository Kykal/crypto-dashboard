import { dynamicColor } from "../../../utils/dynamic-indicators";
const currencyNumericFormatterOptions: NumericFormatProps<InputAttributes> = {
  decimalScale: 2,
  fixedDecimalScale: true,
  thousandSeparator: " ",
};
import { numericFormatter } from "react-number-format";

//MATERIAL DESIGN
//Components
import { Avatar, Group, Stack, Text } from "@mantine/core";

//Types
import type { CoinMarket } from "../../../types/coins-markets";
import type { InputAttributes, NumericFormatProps } from "react-number-format";
interface ListItemProps extends CoinMarket {}

//Main component
const ListItem = (props: ListItemProps) => {
  const {
    image,
    name,
    symbol,
    current_price,
    price_change_24h,
    price_change_percentage_24h,
  } = props;

  //Main render
  return (
    <Group
      role="listitem"
      aria-label={`${name} crypto currency information`}
      component="li"
      justify="space-between"
    >
      <Avatar
        role="img"
        aria-label="Crypto currency icon"
        src={image}
        visibleFrom="xs"
      >
        {name[0]}
      </Avatar>
      <Stack gap={0} flex={1}>
        <Text aria-label="Crypto currency name" component="span">
          {name}
        </Text>
        <Text
          aria-label="Crypto currency symbol"
          component="span"
          size="sm"
          c="dimmed"
        >
          {symbol.toUpperCase()}
        </Text>
      </Stack>
      <Stack gap={0} justify="flex-end">
        <Text aria-label="Crypto currency " component="span" ta="end" fw="bold">
          {numericFormatter(
            String(current_price),
            currencyNumericFormatterOptions
          )}
        </Text>
        <Group align="center" justify="flex-end">
          <Text component="span" size="sm" c={dynamicColor(price_change_24h)}>
            {numericFormatter(String(price_change_24h), {
              ...currencyNumericFormatterOptions,
              prefix: price_change_24h < 0 ? "" : "+",
            })}
          </Text>
          <Text
            component="span"
            size="sm"
            c={dynamicColor(price_change_percentage_24h)}
          >
            (
            {numericFormatter(String(price_change_percentage_24h), {
              suffix: " %",
            })}
            )
          </Text>
        </Group>
      </Stack>
    </Group>
  );
};

export default ListItem; // Export main component
