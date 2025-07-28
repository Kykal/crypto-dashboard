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
import type { DefaultMantineColor, StyleProp } from "@mantine/core";
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
    <Group justify="space-between">
      <Avatar src={image}>{name[0]}</Avatar>
      <Stack gap={0} flex={1}>
        <Text component="span">{name}</Text>
        <Text component="span" size="sm" c="dimmed">
          {symbol.toUpperCase()}
        </Text>
      </Stack>
      <Stack gap={0} justify="flex-end">
        <Text component="span" ta="end" fw="bold">
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

// Sets the color if it gained, lost or held its value
const dynamicColor = (
  value: number
): StyleProp<DefaultMantineColor> | undefined => {
  // Lost
  if (value < 0) {
    return "red.7";
  }

  if (value > 0) {
    return "green.7";
  }

  return undefined;
};
