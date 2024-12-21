import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurants-slice.js";
import { Tab } from "../tabs/tabs";

export const RestaurantTabContainer = ({ id, onClick, isActive }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return;
  }

  return <Tab title={restaurant.name} onClick={onClick} isActive={isActive} />;
};
