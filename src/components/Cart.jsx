import { useCart } from "../contexts/CartProvider";
import CartItem from "./CartItem";
const Cart = () => {
  const { cart } = useCart();
  // let totalAmount = 0;
  // for (let item of cart) {
  //   totalAmount += item.price * item.quantity;
  // }
  const totalAmount = cart.reduce((accumulator, item) => {
    return accumulator + (item.price * item.quantity);
  }, 0);

  if (cart.length === 0) return <h1>No items found !!!</h1>;
  return (
    <div>
      <div>
        {cart.map((cartItem) => (
          <CartItem key={cartItem.id} {...cartItem} />
        ))}
      </div>
      <h1>Total Price : {totalAmount}</h1>
    </div>
  );
};

export default Cart;
