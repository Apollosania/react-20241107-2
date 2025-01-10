"use client";

import { DishCounter } from "../dish-counter/dish-counter";
import { Text } from "../typography/text";
import style from "./dish.module.css";
import { Title } from "../typography/title";
import { useAuth } from "../auth-context/use-auth.js";
import Link from "next/link.js";
import { useLayoutTitle } from "../layout-title-context/use-layout-title.js";
import { useEffect } from "react";

export const Dish = ({ id, name, price, ingredients }) => {
  const { auth } = useAuth();
  const { setTitle } = useLayoutTitle();

  useEffect(() => {
    if (name) {
      setTitle(name);
    }
  }, [setTitle, name]);

  if (!name || !price) {
    return null;
  }

  return (
    <article className={style.wrapper}>
      <Title level={4} className={style.title}>
        <Link href={`/dish/${id}`}>{name}</Link>
      </Title>

      <p>
        <Text>
          <b>Цена:</b> {price}
        </Text>
      </p>

      {Array.isArray(ingredients) && ingredients.length > 0 && (
        <p>
          <Text>
            <b>Состав:</b> {ingredients.join(", ")}
          </Text>
        </p>
      )}

      {auth.isAuthorized && <DishCounter id={id} />}
    </article>
  );
};
