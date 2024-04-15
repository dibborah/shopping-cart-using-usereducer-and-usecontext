const Product = ({ id, title, price, img }) => {
  return (
    <div
      style={{ margin: "1rem", padding: "1rem", border: "2px solid #343434" }}
    >
      <p>id: {id}</p>
      <img src={img} alt="image not found" height={200} />
      <p>title : {title}</p>
      <p>price: {price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
