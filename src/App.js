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

//initial store
const init = {
  count: 24,
};

// reducer
function reducer(state, action) {
  console.log(state, action);
  if (action.type === "DECREASE") {
    return { count: state.count - 1 };
  }
  return state;
}

const store = createStore(reducer, init);
store.dispatch({ type: "DECREASE" });
store.dispatch({ type: "DECREASE" });
store.dispatch({ type: "DECREASE" });
store.dispatch({ type: "DECREASE" });
store.dispatch({ type: "DECREASE" });

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
