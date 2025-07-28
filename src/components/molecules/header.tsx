//MATERIAL DESIGN
//Components
import { AppShell, Group, Title } from "@mantine/core";

//Components
import ThemeToggleAction from "../atoms/theme-toggle-action";
import GithhubProjectAction from "../atoms/githhub-project-action";

//Main component
const Header = () => {
  //Main render
  return (
    <AppShell.Header>
      <Group align="center" justify="space-between" px={25} py={15} h="100%">
        <Title order={1} size="lg" hiddenFrom="md">
          Crypto dashboard
        </Title>
        <Title order={1} visibleFrom="md">
          Crypto dashboard
        </Title>
        <Group gap={10} align="center">
          <GithhubProjectAction />
          <ThemeToggleAction />
        </Group>
      </Group>
    </AppShell.Header>
  );
};

export default Header; // Export main component
