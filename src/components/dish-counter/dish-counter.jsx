import { Counter } from "../counter/counter.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItemAmountById,
} from "../../redux/ui/cart/cart-slice.js";

export const DishCounter = ({ id }) => {
  const amount =
    useSelector((state) => selectCartItemAmountById(state, id)) || 0;
  const dispatch = useDispatch();

  return (
    <Counter
      value={amount}
      increment={() => dispatch(addToCart(id))}
      decrement={() => dispatch(removeFromCart(id))}
    />
  );
};
