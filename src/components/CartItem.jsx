import { useCart } from "../contexts/CartProvider";

const CartItem = ({ id, title, price, quantity }) => {
  const { increaseQty, decreaseQty, removeItem } = useCart();
  return (
    <div
      style={{ margin: "1rem", padding: "1rem", border: "2px solid #343434" }}
    >
      <p>id: {id}</p>
      <p>title: {title}</p>
      <p>
        price: {price} * {quantity} = {quantity * price}
      </p>
      <p>quantity: {quantity}</p>
      <button onClick={() => increaseQty(id)}>Increase Item</button>
      <button onClick={() => quantity > 1 && decreaseQty(id)}>
        Decrease Item
      </button>
      <button onClick={() => removeItem(id)}>Remove Item</button>
    </div>
  );
};

export default CartItem;
