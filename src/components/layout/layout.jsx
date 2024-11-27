import { ProgressBar } from "../progress-bar/progress-bar.jsx";
import { Title } from "../typography/title";
import { Text } from "../typography/text.jsx";

import style from "./layout.module.css";

export const Layout = ({ title, children }) => {
  return (
    <>
      <ProgressBar />
      <div className={style.wrapper}>
        <header className={style.header}>
          <div className={style.container}>
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
