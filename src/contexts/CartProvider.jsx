import { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

function cartReducer(cart, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      return [...cart, action.payload];
    }
    case "INCREASE_QTY": {
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    }
    case "DECREASE_QTY": {
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    }
    case "REMOVE_ITEM": {
      return cart.filter((item) => item.id !== action.payload.id);
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
  function increaseQty(id) {
    dispatch({ type: "INCREASE_QTY", payload: { id: id } });
  }
  function decreaseQty(id) {
    dispatch({ type: "DECREASE_QTY", payload: { id: id } });
  }
  function removeItem(id) {
    dispatch({ type: "REMOVE_ITEM", payload: { id: id } });
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        increaseQty,
        decreaseQty,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export default CartProvider;
