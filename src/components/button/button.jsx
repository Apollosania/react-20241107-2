import classNames from "classnames";

import style from "./button.module.css";

export const Button = ({ children, onClick, type = "primary" }) => {
  return (
    <button
      type={"button"}
      onClick={onClick}
      className={classNames(style.button, {
        [style.primary]: type === "primary",
        [style.secondary]: type === "secondary",
      })}
    >
      {children}
    </button>
  );
};
