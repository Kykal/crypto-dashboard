//MATERIAL DESIGN
//Components
import { ActionIcon, Tooltip } from "@mantine/core";
//Icons
import { IconBrandGithub } from "@tabler/icons-react";

//Types
import type { ActionIconProps } from "@mantine/core";
interface GithhubProjectActionProps extends ActionIconProps {}

//Main component
const GithhubProjectAction = (props: GithhubProjectActionProps) => {
  //Main render
  return (
    <Tooltip label="Github project">
      <ActionIcon
        component="a"
        href="https://github.com/Kykal/crypto-dashboard"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Github project in a new tab"
        {...props}
      >
        <IconBrandGithub role="graphics-symbol" />
      </ActionIcon>
    </Tooltip>
  );
};

export default GithhubProjectAction; // Export main component
