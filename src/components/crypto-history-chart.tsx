//MATERIAL DESIGN
//Components
import { LineChart } from "@mantine/charts";

//Main component
const CryptoHistoryChart = () => {
  //Main render
  return <LineChart h={300} dataKey="date" data={data} series={series} />;
};

export default CryptoHistoryChart; // Export main component

const data = [
  {
    date: "Jul 27",
    dogecoin: 3,
  },
  {
    date: "Jul 28",
    dogecoin: 4,
  },
];

const series = [
  {
    name: "dogecoin",
    color: "blue.5",
  },
];
