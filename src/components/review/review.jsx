import { Text } from "../typography/text";
import { Title } from "../typography/title";
import style from "./review.module.css";

export const Review = ({ text, rating, userName }) => {
  if (!userName || !text || !Number.isInteger(rating)) {
    return null;
  }

  return (
    <article className={style.wrapper}>
      <Title level={4} className={style.title}>
        {userName}
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
