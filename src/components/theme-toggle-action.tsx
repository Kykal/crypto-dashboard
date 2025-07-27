//MATERIAL DESIGN
//Components
import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
//Icons
import { IconSun, IconMoon } from "@tabler/icons-react";

//Main component
const ThemeToggleAction = () => {
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  const computedColorScheme = useComputedColorScheme();

  const icon = colorScheme === "dark" ? <IconSun /> : <IconMoon />;

  const onClickHandler = () =>
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");

  //Main render
  return (
    <ActionIcon
      aria-label="Theme"
      variant="default"
      size="lg"
      onClick={onClickHandler}
    >
      {icon}
    </ActionIcon>
  );
};

export default ThemeToggleAction; // Export main component
