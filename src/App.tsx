//MATERIAL DESIGN
//Components
import { AppShell, useComputedColorScheme } from "@mantine/core";

//Components
import Header from "./components/molecules/header";
import Main from "./components/molecules/main";

//Main component
const App = () => {
  const colorScheme = useComputedColorScheme();

  //Main render
  return (
    <AppShell
      header={{
        height: 75.2,
      }}
      styles={(theme) => ({
        main: {
          backgroundColor:
            colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Header />
      <Main />
    </AppShell>
  );
};

export default App; // Export main component
