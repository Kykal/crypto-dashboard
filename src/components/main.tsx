//MATERIAL DESIGN
//Components
import { AppShell, Card, Container, Grid } from "@mantine/core";

//Components
import CryptoHistoryChart from "./crypto-history-chart";
import CryptosHistoryList from "./cryptos-history-list";

//Main component
const Main = () => {
  //Main render
  return (
    <AppShell.Main>
      <Container size="lg">
        <Grid>
          <Grid.Col span={8}>
            <Card>
              <CryptoHistoryChart />
            </Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card>
              <CryptosHistoryList />
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </AppShell.Main>
  );
};

export default Main; // Export main component
