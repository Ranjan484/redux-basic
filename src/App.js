import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

// store - stores data, think of state
// reducer - function that used to update store

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";

//initial store
const init = {
  cart: cartItems,
  total: 0,
  amount: 5,
};

const store = createStore(reducer, init);
function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer cart={cartItems} />
    </Provider>
  );
}

export default App;
