//Types
import type { DefaultMantineColor, StyleProp } from "@mantine/core";

// Sets the color if it gained, lost or held its value
export const dynamicColor = (
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
