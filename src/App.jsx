import HeaderElement from "./components/HeaderElement";
import Products from "./components/Products";
import CartProvider from "./contexts/CartProvider";

const App = () => {
  return (
    <CartProvider>
      <HeaderElement />
      <Products />
    </CartProvider>
  );
};

export default App;
