"use client";

import { Title } from "../typography/title";
import style from "./food-menu.module.css";
import { Dish } from "../dish/dish.jsx";
import { useLayoutTitle } from "../layout-title-context/use-layout-title.js";
import { useEffect } from "react";

export const FoodMenu = ({ dishes, pageTitle }) => {
  const { setTitle } = useLayoutTitle();

  useEffect(() => {
    if (pageTitle) {
      setTitle(`${pageTitle} - Меню`);
    }
  }, [setTitle, pageTitle]);

  return (
    <section>
      <Title level={3}>Меню</Title>

      <ul className={style.list}>
        {dishes.map((dish) => (
          <li key={dish.id}>
            <Dish {...dish} />
          </li>
        ))}
      </ul>
    </section>
  );
};
