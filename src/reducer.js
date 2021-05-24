import { CLEAR_CART, DECREASE, INCREASE, REMOVE } from "./action";

function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === INCREASE) {
    const plus = state.cart.map((item) => {
      // console.log(item);
      if (item.id === action.payload.id) {
        item = { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: plus };
  }
  if (action.type === DECREASE) {
    console.log("decrease");
  }
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    };
  }
  return state;
}
export default reducer;
