//MATERIAL DESIGN
import { createTheme } from "@mantine/core";

const theme = createTheme({
  components: {
    ActionIcon: {
      defaultProps: {
        size: "lg",
        variant: "default",
      },
    },
    SegmentedControl: {
      defaultProps: {
        size: "xs",
        withItemsBorders: false,
        radius: "xl",
      },
    },
    Tooltip: {
      defaultProps: {
        withArrow: true,
      },
    },
  },
});

export default theme;
