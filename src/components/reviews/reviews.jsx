"use client";

import { Title } from "../typography/title";
import style from "./reviews.module.css";
import { Review } from "../review/review.jsx";
import { useLayoutTitle } from "../layout-title-context/use-layout-title.js";
import { useEffect } from "react";

export const Reviews = ({ reviews, pageTitle, users }) => {
  const { setTitle } = useLayoutTitle();

  useEffect(() => {
    if (pageTitle) {
      setTitle(`${pageTitle} - Отзывы`);
    }
  }, [setTitle, pageTitle]);

  return (
    <section>
      <Title level={3}>Отзывы</Title>

      <ul className={style.list}>
        {reviews?.map((review) => (
          <li key={review.id}>
            <Review
              text={review.text}
              rating={review.rating}
              userName={users.find(({ id }) => id === review.userId)?.name}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
