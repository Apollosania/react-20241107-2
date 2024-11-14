import { createRoot } from "react-dom/client";
import { restaurants } from "../materials/mock.js";
import { Fragment } from "react";

createRoot(document.getElementById("root")).render(
  <Fragment>
    <article>
      <h2>{restaurants[0].name}</h2>

      <section>
        <h3>Меню</h3>

        <ul>
          <li>
            {`
            Название блюда: ${restaurants[0].menu[0].name}, 
            Цена: ${restaurants[0].menu[0].price}, 
            Состав: ${restaurants[0].menu[0].ingredients[0]}, ${restaurants[0].menu[0].ingredients[1]}
          `}
          </li>
          <li>
            {`
            Название блюда: ${restaurants[0].menu[1].name}, 
            Цена: ${restaurants[0].menu[1].price}, 
            Состав: ${restaurants[0].menu[1].ingredients[0]}
          `}
          </li>
          <li>
            {`
            Название блюда: ${restaurants[0].menu[2].name}, 
            Цена: ${restaurants[0].menu[2].price}, 
            Состав: ${restaurants[0].menu[2].ingredients[0]}, ${restaurants[0].menu[2].ingredients[1]}
          `}
          </li>
        </ul>
      </section>

      <section>
        <h3>Отзывы</h3>

        <ul>
          <li>
            {`
            Пользователь: ${restaurants[0].reviews[0].user},
            Текст: ${restaurants[0].reviews[0].text},
            Рейтинг: ${restaurants[0].reviews[0].rating}
          `}
          </li>
          <li>
            {`
            Пользователь: ${restaurants[0].reviews[1].user},
            Текст: ${restaurants[0].reviews[1].text},
            Рейтинг: ${restaurants[0].reviews[1].rating}
          `}
          </li>
        </ul>
      </section>
    </article>

    <article>
      <h2>{restaurants[1].name}</h2>

      <section>
        <h3>Меню</h3>

        <ul>
          <li>
            {`
            Название блюда: ${restaurants[1].menu[0].name}, 
            Цена: ${restaurants[1].menu[0].price}, 
            Состав: ${restaurants[1].menu[0].ingredients[0]}, ${restaurants[1].menu[0].ingredients[1]}, ${restaurants[1].menu[0].ingredients[2]}
          `}
          </li>
          <li>
            {`
            Название блюда: ${restaurants[1].menu[1].name}, 
            Цена: ${restaurants[1].menu[1].price}, 
            Состав: ${restaurants[1].menu[1].ingredients[0]}, ${restaurants[1].menu[1].ingredients[1]}, ${restaurants[1].menu[1].ingredients[2]}, ${restaurants[1].menu[1].ingredients[3]}
          `}
          </li>
        </ul>
      </section>

      <section>
        <h3>Отзывы</h3>

        <ul>
          <li>
            {`
            Пользователь: ${restaurants[1].reviews[0].user},
            Текст: ${restaurants[1].reviews[0].text},
            Рейтинг: ${restaurants[1].reviews[0].rating}
          `}
          </li>
          <li>
            {`
            Пользователь: ${restaurants[1].reviews[1].user},
            Текст: ${restaurants[1].reviews[1].text},
            Рейтинг: ${restaurants[1].reviews[1].rating}
          `}
          </li>
          <li>
            {`
            Пользователь: ${restaurants[1].reviews[2].user},
            Текст: ${restaurants[1].reviews[2].text},
            Рейтинг: ${restaurants[1].reviews[2].rating}
          `}
          </li>
        </ul>
      </section>
    </article>

    <article>
      <h2>{restaurants[2].name}</h2>

      <section>
        <h3>Меню</h3>

        <ul>
          <li>
            {`
            Название блюда: ${restaurants[2].menu[0].name}, 
            Цена: ${restaurants[2].menu[0].price}, 
            Состав: ${restaurants[2].menu[0].ingredients[0]}
          `}
          </li>
          <li>
            {`
            Название блюда: ${restaurants[2].menu[1].name}, 
            Цена: ${restaurants[2].menu[1].price}, 
            Состав: ${restaurants[2].menu[1].ingredients[0]}, ${restaurants[2].menu[1].ingredients[1]}
          `}
          </li>
          <li>
            {`
            Название блюда: ${restaurants[2].menu[2].name}, 
            Цена: ${restaurants[2].menu[2].price}, 
            Состав: ${restaurants[2].menu[2].ingredients[0]}
          `}
          </li>
        </ul>
      </section>

      <section>
        <h3>Отзывы</h3>

        <ul>
          <li>
            {`
            Пользователь: ${restaurants[2].reviews[0].user},
            Текст: ${restaurants[2].reviews[0].text},
            Рейтинг: ${restaurants[2].reviews[0].rating}
          `}
          </li>
        </ul>
      </section>
    </article>

    <article>
      <h2>{restaurants[3].name}</h2>

      <section>
        <h3>Меню</h3>

        <ul>
          <li>
            {`
            Название блюда: ${restaurants[3].menu[0].name}, 
            Цена: ${restaurants[3].menu[0].price}, 
            Состав: ${restaurants[3].menu[0].ingredients[0]}
          `}
          </li>
          <li>
            {`
            Название блюда: ${restaurants[3].menu[1].name}, 
            Цена: ${restaurants[3].menu[1].price}, 
            Состав: ${restaurants[3].menu[1].ingredients[0]}, ${restaurants[3].menu[1].ingredients[1]}
          `}
          </li>
        </ul>
      </section>

      <section>
        <h3>Отзывы</h3>

        <ul>
          <li>
            {`
            Пользователь: ${restaurants[3].reviews[0].user},
            Текст: ${restaurants[3].reviews[0].text},
            Рейтинг: ${restaurants[3].reviews[0].rating}
          `}
          </li>
          <li>
            {`
            Пользователь: ${restaurants[3].reviews[1].user},
            Текст: ${restaurants[3].reviews[1].text},
            Рейтинг: ${restaurants[3].reviews[1].rating}
          `}
          </li>
        </ul>
      </section>
    </article>
  </Fragment>,
);
