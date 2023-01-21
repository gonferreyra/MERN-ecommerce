import { types } from "./shopping-types";

const savedCart = JSON.parse(localStorage.getItem("savedCart")) || [];

const INITIAL_STATE = {
  cart: savedCart,
  currentItem: null,
  orders: [],
};

// console.log(test)

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      // get the items data from the products
      // return the first element in the array that have the same id
      const item = action.payload.sneaker;
      // check if the item is in cart
      const inCart = state.cart.find((item) =>
        item.item._id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? // if it's in the cart: map the cart and bring the item to add 1 to it's quantity
            state.cart.map((item) =>
              item.item._id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : // if it's not in the cart, bring the item
                  item
            )
          : // if it's not, create an array with the item and set it's quantity to 1
            [...state.cart, { item, quantity: 1 }],
      };
    case types.REMOVE_FROM_CART:
      // return every item that is not the one we clicked
      return {
        ...state,
        cart: state.cart.filter((item) => item.item._id !== action.payload.id),
      };
    case types.ADJUST_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.item._id === action.payload.id
            ? {
                ...item,
                quantity: +action.payload.quantity,
              }
            : item
        ),
      };
    case types.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    case types.EMPTY_CART:
      return {
        ...state,
        cart: [],
      };

    case types.NEW_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
        // orders: action.payload,
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

export default shopReducer;
