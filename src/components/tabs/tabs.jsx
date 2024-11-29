import style from "./tabs.module.css";
import classNames from "classnames";

export const Tab = ({ title, onClick, isActive }) => {
  return (
    <button
      type={"button"}
      className={classNames(style.button, {
        [style.buttonActive]: isActive,
      })}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
