//MATERIAL DESIGN
//Components
import { Group, Stack } from "@mantine/core";

//Components
import Chart from "./chart";
import CryptosSelect from "./cryptos-select";
import FrequencySegmentedControl from "./frequency-segmented-control";

//Main component
const CryptoHistoryChart = () => {
  //Main render
  return (
    <Stack>
      <Group justify="space-between">
        <CryptosSelect />
        <FrequencySegmentedControl />
      </Group>
      <Chart />
    </Stack>
  );
};

export default CryptoHistoryChart; // Export main component
