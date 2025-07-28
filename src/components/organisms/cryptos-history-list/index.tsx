//ReactJS
import useCryptosStore from "../../../store/use-cryptos-store";

//MATERIAL DESIGN
//Components
import { Group, Skeleton, Stack, Title } from "@mantine/core";

//Components
import FrequencySegmentedControl from "./frequency-segmented-control";
import ListItem from "./list-item";

//Main component
const CryptosHistoryList = () => {
  const data = useCryptosStore((state) => state.data);
  const loading = useCryptosStore((state) => state.loading);

  const items = data?.map((item) => <ListItem key={item.symbol} {...item} />);

  //Main render
  return (
    <Stack>
      <Group align="center" justify="space-between">
        <Title order={2} c="dimmed" size="md">
          Cryptos history
        </Title>
        <FrequencySegmentedControl />
      </Group>
      <Skeleton visible={loading} h={595}>
        <Stack component="ol" m={0} p={0}>
          {items}
        </Stack>
      </Skeleton>
    </Stack>
  );
};

export default CryptosHistoryList; // Export main component
