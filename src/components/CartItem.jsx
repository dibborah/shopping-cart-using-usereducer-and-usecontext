import { useCart } from "../contexts/CartProvider";

const CartItem = ({ id, price, quantity, title }) => {
  const { increaseQuantity, decreaseQuantity, removeItem } = useCart();
  return (
    <div
      style={{ margin: "1rem", padding: "1rem", border: "2px solid #343434" }}
    >
      <p>id: {id}</p>
      <p>title: {title}</p>
      <p>price: {price} * {quantity} = {price * quantity}</p>
      <p>quantity: {quantity}</p>
      <button onClick={() => increaseQuantity(id)}>Increase Quantity</button>
      <button onClick={() => quantity > 1 && decreaseQuantity(id)}>Decrease Quantity</button>
      <button onClick={() => removeItem(id)}>Remove Item</button>
    </div>
  );
};

export default CartItem;
