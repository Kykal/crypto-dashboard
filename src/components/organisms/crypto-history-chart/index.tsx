//MATERIAL DESIGN
//Components
import { Group, Stack } from "@mantine/core";

//Components
import CryptoInformation from "./crypto-information";
import CryptosSelect from "./cryptos-select";
import FrequencySegmentedControl from "./frequency-segmented-control";

//Main component
const CryptoHistoryChart = () => {
  //Main render
  return (
    <Stack>
      <Group align="center" justify="flex-end">
        <Group gap={20} align="center">
          <CryptosSelect />
          <FrequencySegmentedControl />
        </Group>
      </Group>
      <CryptoInformation />
    </Stack>
  );
};

export default CryptoHistoryChart; // Export main component
