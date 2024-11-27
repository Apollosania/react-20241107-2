import { Text } from "../typography/text";
import { Title } from "../typography/title";

import style from "./review.module.css";

export const Review = ({ user, text, rating }) => {
  if (!user || !text || !Number.isInteger(rating)) {
    return null;
  }

  return (
    <article className={style.wrapper}>
      <Title level={4} className={style.title}>
        {user}
      </Title>

      <p>
        <Text>
          <b>Текст:</b> {text}
        </Text>
      </p>

      <p>
        <Text>
          <b>Рейтинг:</b> {rating} из 5
        </Text>
      </p>
    </article>
  );
};
