import { Title } from "../typography/title";
import style from "./reviews.module.css";
import { ReviewContainer } from "../review/review-container";

export const Reviews = ({ ids }) => {
  return (
    <section>
      <Title level={3}>Отзывы</Title>

      <ul className={style.list}>
        {ids.map((id) => (
          <li key={id}>
            <ReviewContainer id={id} />
          </li>
        ))}
      </ul>
    </section>
  );
};
