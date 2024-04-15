import Products from "./components/Products";
import CartProvider from "./contexts/CartProvider";

const App = () => {
  return (
    <CartProvider>
      <Products />
    </CartProvider>
  );
};

export default App;
