//MATERIAL DESIGN
//Components
import { AppShell } from "@mantine/core";

//Components
import Header from "./components/header";
import Main from "./components/main";

//Main component
const App = () => {
  //Main render
  return (
    <AppShell
      header={{
        height: 75.2,
      }}
    >
      <Header />
      <Main />
    </AppShell>
  );
};

export default App; // Export main component
