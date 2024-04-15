import { products } from "../data/products";
import Product from "./Product";

const Products = () => {
  return (
    <div>
    {products.map((product) => <Product {...product} key={product.id}/>)}
    </div>
  )
}

export default Products;