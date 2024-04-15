import { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

function cartReducer(cart, action) {
  console.log("cart Reducer called");
  switch (action.type) {
    case "ADD_ITEM": {
      return [...cart, action.payload]; // doubt in here
    }
    default: {
      return cart;
    }
  }
}

const initialValue = [];

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialValue);
  return (
    <CartContext.Provider value={{ cart: cart, dispatch: dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export default CartProvider;
