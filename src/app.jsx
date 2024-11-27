import { restaurants } from "../materials/mock.js";
import { Layout } from "./components/layout/layout.jsx";
import { ReviewForm } from "./components/review-form/review-form";
import { Restaurant } from "./components/restaurant/restaurant.jsx";
import { Tab } from "./components/tabs/tabs";
import { useState } from "react";

import "./style.css";

export const App = () => {
  const [currentRestaurantId, setCurrentRestaurantId] = useState(
    restaurants[0].id,
  );

  const currentRestaurant = restaurants.find(
    ({ id }) => id === currentRestaurantId,
  );

  return (
    <Layout title={"Список ресторанов"}>
      {restaurants?.map(({ name, id }) => (
        <Tab
          key={id}
          title={name}
          onClick={() => setCurrentRestaurantId(id)}
          isActive={id === currentRestaurantId}
        ></Tab>
      ))}

      {Boolean(currentRestaurant) && <Restaurant {...currentRestaurant} />}

      <ReviewForm key={currentRestaurantId} />
    </Layout>
  );
};
