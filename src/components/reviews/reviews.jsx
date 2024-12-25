import { Title } from "../typography/title";
import style from "./reviews.module.css";
import { Review } from "../review/review.jsx";

export const Reviews = ({ reviews }) => {
  return (
    <section>
      <Title level={3}>Отзывы</Title>

      <ul className={style.list}>
        {reviews?.map((review) => (
          <li key={review.id}>
            <Review {...review} />
          </li>
        ))}
      </ul>
    </section>
  );
};
