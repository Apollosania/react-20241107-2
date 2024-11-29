import classNames from "classnames";

import style from "./typography.module.css";

export const Text = ({ children, type = "primary" }) => {
  return (
    <span
      className={classNames(style.text, {
        [style.primary]: type === "primary",
        [style.secondary]: type === "secondary",
        [style.reverse]: type === "reverse",
      })}
    >
      {children}
    </span>
  );
};
