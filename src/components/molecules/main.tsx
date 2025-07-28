//MATERIAL DESIGN
//Components
import { AppShell, Card, Container, Grid } from "@mantine/core";

//Components
import CryptoHistoryChart from "../organisms/crypto-history-chart";
import CryptosHistoryList from "../organisms/cryptos-history-list";
import TopCryptosWithPositiveTrend from "../organisms/top-cryptos-with-positive-trend";

//Main component
const Main = () => {
  //Main render
  return (
    <AppShell.Main>
      <Container pt={20} size="xl">
        <Grid>
          <Grid.Col span={8}>
            <Card h="100%">
              <CryptoHistoryChart />
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card h="100%">
              <CryptosHistoryList />
            </Card>
          </Grid.Col>
          <Grid.Col span={12}>
            <Card h="100%">
              <TopCryptosWithPositiveTrend />
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </AppShell.Main>
  );
};

export default Main; // Export main component
