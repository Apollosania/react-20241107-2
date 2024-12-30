"use client";

import style from "./layout.module.css";
import { ProgressBar } from "../progress-bar/progress-bar.jsx";
import { Text } from "../typography/text.jsx";
import { ThemeSwitcher } from "../theme-switcher/theme-switcher";
import { AuthWidget } from "../auth-widget/auth-widget.jsx";
import { Header } from "../header/header";
import { LayoutTitleContextProvider } from "../layout-title-context/layout-title-context-provider";
import { LayoutTitle } from "../layout-title/layout-title";
import Link from "next/link.js";

export const Layout = ({ children }) => {
  return (
    <LayoutTitleContextProvider>
      <ProgressBar />
      <div className={style.wrapper}>
        <Header>
          <div className={style.container}>
            <div className={style.topPanel}>
              <ThemeSwitcher />

              <AuthWidget />
            </div>

            <LayoutTitle />
          </div>
        </Header>

        <main className={style.main}>
          <div className={style.container}>
            <nav className={style.nav}>
              <Link href={"/"}>Главная</Link>
              <Link href={"/restaurants"}>Список ресторанов</Link>
            </nav>

            <div>{children}</div>
          </div>
        </main>

        <footer className={style.footer}>
          <div className={style.container}>
            <address>
              <Text type={"reverse"}>Наши контакты</Text>
            </address>
          </div>
        </footer>
      </div>
    </LayoutTitleContextProvider>
  );
};
