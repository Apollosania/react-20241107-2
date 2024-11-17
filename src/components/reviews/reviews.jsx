export const Reviews = ({ reviews }) => {
  return (
    <section>
      <h3>Отзывы</h3>

      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            {Boolean(review.user) && (
              <p>
                <b>Пользователь:</b> {review.user}
              </p>
            )}
            {Boolean(review.text) && (
              <p>
                <b>Текст:</b> {review.text}
              </p>
            )}
            {Number.isInteger(review.rating) && (
              <p>
                <b>Рейтинг:</b> {review.rating} из 5
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
