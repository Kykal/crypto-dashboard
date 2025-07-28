//MATERIAL DESIGN
import { createTheme, SegmentedControl } from "@mantine/core";

const theme = createTheme({
  components: {
    AppShell: {},
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
