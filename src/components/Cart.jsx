import { useCart } from "../contexts/CartProvider";
import CartItem from "./CartItem";
const Cart = () => {
  const { cart } = useCart();

  // w/o using reduce
  // let totalAmount = 0;
  // for(let item of cart){
  //   totalAmount += item.price * item.quantity;
  // }

  // using higher order reduce function
  const totalAmount = cart.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);
  if (cart.length === 0) return <h1>No items found !!!</h1>;
  return (
    <div>
      <div>
        {cart.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}
      </div>
      <h2>Totat Price: {totalAmount}</h2>
    </div>
  );
};

export default Cart;
