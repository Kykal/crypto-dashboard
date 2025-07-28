//MATERIAL DESIGN
//Components
import { Group, SegmentedControl, Stack, Title } from "@mantine/core";

//Components
import PositiveTrendingTable from "./positive-trending-table";

//Main component
const TopCryptosWithPositiveTrend = () => {
  //Main render
  return (
    <Stack>
      <Group align="center" justify="space-between">
        <Title order={2} c="dimmed" size="md">
          Top positive trending cryptos
        </Title>
        <SegmentedControl
          data={[
            {
              label: "24 h",
              value: "24h",
            },
          ]}
        />
      </Group>
      <PositiveTrendingTable />
    </Stack>
  );
};

export default TopCryptosWithPositiveTrend; // Export main component
