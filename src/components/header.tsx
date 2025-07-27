//MATERIAL DESIGN
//Components
import { AppShell, Group, Title } from "@mantine/core";

//Components
import ThemeToggleAction from "./theme-toggle-action";

//Main component
const Header = () => {
  //Main render
  return (
    <AppShell.Header>
      <Group align="center" justify="space-between" px={25} py={15}>
        <Title order={1}>Crypto dashboard</Title>
        <ThemeToggleAction />
      </Group>
    </AppShell.Header>
  );
};

export default Header; // Export main component
