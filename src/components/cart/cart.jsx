import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/ui/cart-slice.js";
import { CartItem } from "../cart-item/cart-item";

export const Cart = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <div>
      <h3>Корзина</h3>

      {!cartItems.length ? (
        <p>Корзина пуста</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={id}>
              <CartItem id={item.id} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
