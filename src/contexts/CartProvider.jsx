import { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

function cartReducer(cart, action) {
  console.log("cart Reducer called");
  switch (action.type) {
    case "ADD_ITEM": {
      return [...cart, action.payload];
    }
    default: {
      return cart;
    }
  }
}

const initialValue = [];

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialValue);
  function addItemToCart(newCartItem) {
    dispatch({ type: "ADD_ITEM", payload: newCartItem });
  }
  return (
    <CartContext.Provider value={{ cart, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export default CartProvider;
