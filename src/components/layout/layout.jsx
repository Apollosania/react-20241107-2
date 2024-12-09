import style from "./layout.module.css";
import { ProgressBar } from "../progress-bar/progress-bar.jsx";
import { Title } from "../typography/title";
import { Text } from "../typography/text.jsx";
import { ThemeSwitcher } from "../theme-switcher/theme-switcher";
import { AuthWidget } from "../auth-widget/auth-widget.jsx";
import { Header } from "../header/header";

export const Layout = ({ title, children }) => {
  return (
    <>
      <ProgressBar />
      <div className={style.wrapper}>
        <Header>
          <div className={style.container}>
            <div className={style.topPanel}>
              <ThemeSwitcher />

              <AuthWidget />
            </div>

            {Boolean(title) && <Title type={"reverse"}>{title}</Title>}
          </div>
        </Header>

        <main className={style.main}>
          <div className={style.container}>{children}</div>
        </main>

        <footer className={style.footer}>
          <div className={style.container}>
            <address>
              <Text type={"reverse"}>Наши контакты</Text>
            </address>
          </div>
        </footer>
      </div>
    </>
  );
};
