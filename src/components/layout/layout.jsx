import { ProgressBar } from "../progress-bar/progress-bar.jsx";

import style from "./style.module.css";

export const Layout = ({ title, children }) => {
  return (
    <>
      <ProgressBar />
      <div className={style.wrapper}>
        <header className={style.header}>
          <div className={style.container}>
            {Boolean(title) && <h1>{title}</h1>}
          </div>
        </header>

        <main className={style.main}>
          <div className={style.container}>{children}</div>
        </main>

        <footer className={style.footer}>
          <div className={style.container}>
            <address>Наши контакты</address>
          </div>
        </footer>
      </div>
    </>
  );
};
