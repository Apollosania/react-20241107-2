import style from "./style.module.css";

export const RestaurantsPage = ({ children }) => {
  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <div className={style.container}>
          <h1>Список ресторанов</h1>
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
  );
};
