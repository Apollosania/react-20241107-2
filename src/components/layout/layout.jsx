import { ProgressBar } from "../progress-bar/progress-bar.jsx";
import { Title } from "../typography/title";
import { Text } from "../typography/text.jsx";
import style from "./layout.module.css";
import { ThemeSwitcher } from "../theme-switcher/theme-switcher";
import { useTheme } from "../theme-context/use-theme.js";
import classNames from "classnames";
import { useAuth } from "../auth-context/use-auth.js";
import { LoginForm } from "../login-form/login-form";
import { AccountInfo } from "../account-info/account-info";

export const Layout = ({ title, children }) => {
  const { theme } = useTheme();
  const { auth } = useAuth();

  return (
    <>
      <ProgressBar />
      <div className={style.wrapper}>
        <header
          className={classNames(style.header, {
            [style.headerLight]: theme === "light",
            [style.headerDark]: theme === "dark",
          })}
        >
          <div className={style.container}>
            <div className={style.topPanel}>
              <ThemeSwitcher />

              {auth.isAuthorized ? <AccountInfo /> : <LoginForm />}
            </div>

            {Boolean(title) && <Title type={"reverse"}>{title}</Title>}
          </div>
        </header>

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
