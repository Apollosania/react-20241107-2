import { useForm } from "./use-form.js";
import { Counter } from "../counter/counter";

export const ReviewForm = () => {
  const {
    form: { name, text, rating },
    setName,
    setText,
    incrementRating,
    decrementRating,
    reset,
  } = useForm();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h3>Форма отзыва</h3>
      <div>
        <label htmlFor="name">Имя</label>
        <input
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="text">Текст</label>
        <textarea
          id="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="rating">Рейтинг</label>
        <Counter
          value={rating}
          decrement={decrementRating}
          increment={incrementRating}
        />
      </div>
      <button>Отправить</button>
      <button type={"button"} onClick={reset}>
        Очистить
      </button>
    </form>
  );
};
