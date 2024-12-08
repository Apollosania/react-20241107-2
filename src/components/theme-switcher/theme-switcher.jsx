import { useTheme } from "../theme-context/use-theme.js";
import { Button } from "../button/button";

export const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();

  return (
    <Button type={"secondary"} onClick={toggleTheme}>
      Переключить тему
    </Button>
  );
};
