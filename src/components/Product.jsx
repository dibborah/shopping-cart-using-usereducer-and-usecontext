import { useCart } from "../contexts/CartProvider";

const Product = ({ id, title, price, img }) => {
  const { handleAddToCart } = useCart();
  const handleAdd = () => {
    const newCartItem = {
      id: id,
      title: title,
      price: price,
      img: img,
      quantity: 1,
    };
    handleAddToCart(newCartItem);
  };
  return (
    <div
      style={{ margin: "1rem", padding: "1rem", border: "2px solid #343434" }}
    >
      <p>id: {id}</p>
      <img src={img} alt="image not found" height={200} />
      <p>title : {title}</p>
      <p>price: {price}</p>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
};

export default Product;
