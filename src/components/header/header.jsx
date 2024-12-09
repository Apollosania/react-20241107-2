import classNames from "classnames";
import style from "./header.module.css";
import { useTheme } from "../theme-context/use-theme.js";

export const Header = ({ children }) => {
  const { theme } = useTheme();

  return (
    <header
      className={classNames(style.header, {
        [style.headerLight]: theme === "light",
        [style.headerDark]: theme === "dark",
      })}
    >
      {children}
    </header>
  );
};
