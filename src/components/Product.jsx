import { useCart } from "../contexts/CartProvider";

const Product = ({ id, title, price, img }) => {
  const {cart, addItemToCart } = useCart();
  const handleAdd = () => {
    for(let item of cart){
      if(item.id === id){
        alert("Cannot add item!!!");
        return;
      }
    }
    const newCartItem = {
      id: id,
      title: title,
      price: price,
      img: img,
      quantity: 1,
    };
    addItemToCart(newCartItem);
    alert("Item added successfully !!! ");
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
