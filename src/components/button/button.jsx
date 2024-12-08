import classNames from "classnames";

import style from "./button.module.css";
import { useTheme } from "../theme-context/use-theme.js";

export const Button = ({
  children,
  onClick,
  type = "primary",
  buttonType = "button",
}) => {
  const { theme } = useTheme();

  return (
    <button
      type={buttonType}
      onClick={onClick}
      className={classNames(style.button, {
        [style.primary]: type === "primary" && theme === "light",
        [style.secondary]: type === "secondary" && theme === "light",

        [style.primaryDark]: type === "primary" && theme === "dark",
        [style.secondaryDark]: type === "secondary" && theme === "dark",
      })}
    >
      {children}
    </button>
  );
};
