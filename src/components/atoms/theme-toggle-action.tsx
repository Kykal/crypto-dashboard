//MATERIAL DESIGN
//Components
import {
  ActionIcon,
  Tooltip,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
//Icons
import { IconSun, IconMoon } from "@tabler/icons-react";

//Types
import type { ActionIconProps } from "@mantine/core";
interface ThemeToggleActionProps extends Omit<ActionIconProps, "onClick"> {}

//Main component
const ThemeToggleAction = (props: ThemeToggleActionProps) => {
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  const computedColorScheme = useComputedColorScheme();

  const icon =
    colorScheme === "dark" ? (
      <IconSun role="graphics-symbol" />
    ) : (
      <IconMoon role="graphics-symbol" />
    );

  const onClickHandler = () =>
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");

  //Main render
  return (
    <Tooltip label="Toggle theme">
      <ActionIcon aria-label="Theme" onClick={onClickHandler} {...props}>
        {icon}
      </ActionIcon>
    </Tooltip>
  );
};

export default ThemeToggleAction; // Export main componentw
