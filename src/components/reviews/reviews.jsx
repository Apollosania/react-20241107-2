import { Review } from "../review/review";

export const Reviews = ({ reviews }) => {
  return (
    <section>
      <h3>Отзывы</h3>

      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <Review {...review} />
          </li>
        ))}
      </ul>
    </section>
  );
};
