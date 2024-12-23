import style from "./nav-tab.module.css";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

export const NavTab = ({ title, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(style.button, {
          [style.buttonActive]: isActive,
        })
      }
    >
      {title}
    </NavLink>
  );
};
