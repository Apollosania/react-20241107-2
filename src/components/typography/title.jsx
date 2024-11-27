import classNames from "classnames";

import style from "./typography.module.css";

const titleComponentNames = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
};

export const Title = ({ children, className, level = 1, type = "primary" }) => {
  const TitleComponentName = titleComponentNames[level];

  if (!TitleComponentName) {
    return null;
  }

  return (
    <TitleComponentName
      className={classNames(style.title, style[TitleComponentName], className, {
        [style.primary]: type === "primary",
        [style.secondary]: type === "secondary",
        [style.reverse]: type === "reverse",
      })}
    >
      {children}
    </TitleComponentName>
  );
};
