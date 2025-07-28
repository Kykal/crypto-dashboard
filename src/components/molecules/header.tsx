//MATERIAL DESIGN
//Components
import { ActionIcon, AppShell, Group, Title, Tooltip } from "@mantine/core";
//Icons
import { IconBrandGithub } from "@tabler/icons-react";

//Components
import ThemeToggleAction from "../atoms/theme-toggle-action";

//Main component
const Header = () => {
  //Main render
  return (
    <AppShell.Header>
      <Group align="center" justify="space-between" px={25} py={15}>
        <Title order={1}>Crypto dashboard</Title>
        <Group gap={10}>
          <Tooltip label="Github project">
            <ActionIcon
              component="a"
              href="https://github.com/Kykal/crypto-dashboard"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Github project in a new tab"
            >
              <IconBrandGithub role="graphics-symbol" />
            </ActionIcon>
          </Tooltip>
          <ThemeToggleAction />
        </Group>
      </Group>
    </AppShell.Header>
  );
};

export default Header; // Export main component
