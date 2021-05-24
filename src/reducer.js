import { CLEAR_CART, DECREASE, GET_TOTALS, INCREASE, REMOVE } from "./action";

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
    let minus = [];
    // console.log(action);
    // console.log(action.payload.amount);
    if (action.payload.amount === 1) {
      minus = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
    } else {
      minus = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item = { ...item, amount: item.amount - 1 };
        }
        return item;
      });
    }
    return { ...state, cart: minus };
  }
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload.id),
    };
  }
  if (action.type === GET_TOTALS) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        // console.log(cartTotal);
        // console.log(cartItem);
        const { amount, price } = cartItem;
        const itemTotal = price * amount;

        cartTotal.amount += amount;
        cartTotal.total += itemTotal;

        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = total.toFixed(2);
    return { ...state, total, amount };
  }
  return state;
}
export default reducer;
