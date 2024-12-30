import style from "./nav-tab.module.css";
import Link from "next/link.js";

export const NavTab = ({ title, to }) => {
  return (
    <Link href={to} className={style.button}>
      {title}
    </Link>
  );
};
