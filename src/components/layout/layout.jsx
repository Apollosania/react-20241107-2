import { useEffect, useRef } from "react";
import ScrollProgress from "scrollprogress";

import style from "./style.module.css";

export const Layout = ({ title, children }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    new ScrollProgress((x, y) => {
      wrapperRef.current.style.width = y * 100 + "%";
    });
  }, []);

  return (
    <>
      <div className={style.progressBar} ref={wrapperRef} />
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
