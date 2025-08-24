import { createContext, useState } from "react";
import { plants } from "../assets/data";


export const StoreContext = createContext(null);

const StoreContextProvider =  (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (id) => {
    if(!cartItems[id]){
      setCartItems( (prev) =>( {...prev, [id]: 1}));
    }
    else{
      setCartItems( (prev) => ( {...prev, [id]: prev[id]+1} ));
    }
  }

  const removeFromCart = (id) => {
    setCartItems( (prev) => ( {...prev, [id]: prev[id]-1} ));
  }

  const getTotalAmount = () => {
    let totalCartAmount = 0;
    for(const plantId in cartItems){
      if(cartItems[plantId] > 0){
        let plantPrice =  plants.find( (item) => item.id === plantId);
        totalCartAmount += plantPrice.price * cartItems[plantId];
      }
    }
    return totalCartAmount;
  }

  const contextValue = {
    plants,
    getTotalAmount,
    removeFromCart,
    addToCart,
    cartItems,
    setCartItems
  }

  return(
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;