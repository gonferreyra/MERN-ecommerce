import { types } from "./order-types";

const INITIAL_STATE = {
  orders: [],
};

const ordersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.NEW_ORDER:
      return {
        ...state,
        orders: action.payload,
      };
    case types.GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
};

export default ordersReducer;
