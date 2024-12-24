import { useLayoutTitle } from "../layout-title-context/use-layout-title.js";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const { setTitle } = useLayoutTitle();

  useEffect(() => {
    setTitle("Главная страница");
  }, [setTitle]);

  return (
    <>
      <p>Добро пожаловать на главную страницу списка ресторанов</p>
      <Link to={"restaurants"}>Перейти к списку ресторанов</Link>
    </>
  );
};
