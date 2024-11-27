import { useForm } from "./use-form.js";
import { Counter } from "../counter/counter";
import { Title } from "../typography/title";
import { Text } from "../typography/text.jsx";
import { Button } from "../button/button.jsx";

import style from "./review-from.module.css";

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
      className={style.wrapper}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Title level={3} className={style.title}>
        Форма отзыва
      </Title>

      <div className={style.formControl}>
        <label htmlFor="name">
          <Text>Имя</Text>
        </label>
        <input
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div className={style.formControl}>
        <label htmlFor="text">
          <Text>Текст</Text>
        </label>
        <textarea
          id="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>

      <div className={style.formControl}>
        <label htmlFor="rating">
          <Text>Рейтинг</Text>
        </label>
        <Counter
          value={rating}
          decrement={decrementRating}
          increment={incrementRating}
        />
      </div>

      <Button>Отправить</Button>

      <Button type={"secondary"} onClick={reset}>
        Очистить
      </Button>
    </form>
  );
};
