import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice.js";
import { NavTab } from "../nav-tab/nav-tab.jsx";

export const RestaurantTabContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return;
  }

  return <NavTab title={restaurant.name} to={`/restaurants/${id}`} />;
};
