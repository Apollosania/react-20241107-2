export const Review = ({ user, text, rating }) => {
  if (!user || !text || !Number.isInteger(rating)) {
    return null;
  }

  return (
    <div>
      <p>
        <b>Пользователь:</b> {user}
      </p>

      <p>
        <b>Текст:</b> {text}
      </p>

      <p>
        <b>Рейтинг:</b> {rating} из 5
      </p>
    </div>
  );
};
