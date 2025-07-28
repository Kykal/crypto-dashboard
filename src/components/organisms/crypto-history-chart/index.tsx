//MATERIAL DESIGN
//Components
import { Group, Stack, Title } from "@mantine/core";

//Components
import CryptoInformation from "./crypto-information";
import CryptosSelect from "./cryptos-select";
import FrequencySegmentedControl from "./frequency-segmented-control";

//Main component
const CryptoHistoryChart = () => {
  //Main render
  return (
    <Stack>
      <Group align="center" justify="space-between">
        <Title order={2} c="dimmed" size="md">
          Crypto tendency
        </Title>
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
