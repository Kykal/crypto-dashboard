import useCryptosStore from "../../store/use-cryptos-store";

//MATERIAL DESIGN
//Components
import { Group, Stack, Text, Title } from "@mantine/core";

//Components
import FrequencySegmentedControl from "./frequency-segmented-control";
import ListItem from "./list-item";

//Main component
const CryptosHistoryList = () => {
  const { data, loading } = useCryptosStore();

  const items = data.map((item) => <ListItem key={item.symbol} {...item} />);

  //Main render
  return (
    <Stack>
      <Group align="center" justify="space-between">
        <Title order={2} c="dimmed" size="md">
          Cryptos history
        </Title>
        <FrequencySegmentedControl />
      </Group>
      {loading ? <Text c="dimmed">Loading...</Text> : items}
    </Stack>
  );
};

export default CryptosHistoryList; // Export main component
