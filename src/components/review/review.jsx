import { Text } from "../typography/text";
import { Title } from "../typography/title";
import style from "./review.module.css";
import { UserContainer } from "../user/user-container";

export const Review = ({ userId, text, rating }) => {
  if (!userId || !text || !Number.isInteger(rating)) {
    return null;
  }

  return (
    <article className={style.wrapper}>
      <Title level={4} className={style.title}>
        <UserContainer id={userId} />
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
