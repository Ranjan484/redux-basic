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
import { DECREASE, INCREASE } from "./action";

//initial store
const init = {
  count: 24,
  name: "moblie",
  brand: "multiper",
};

// reducer
function reducer(state, action) {
  console.log(state, action);
  if (action.type === DECREASE) {
    return { ...state, count: state.count - 1 };
  }
  if (action.type === INCREASE) {
    return { ...state, count: state.count + 1, brand: "google" };
  }

  return state;
}

const store = createStore(reducer, init);
store.dispatch({ type: "DECREASE" });
store.dispatch({ type: "INCREASE" });
function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
