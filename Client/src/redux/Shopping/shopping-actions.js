import { fetchWithoutToken } from "../../helpers/fetch";
import { types } from "./shopping-types";
import Swal from "sweetalert2";

export const addToCart = (sneaker) => {
  return {
    type: types.ADD_TO_CART,
    payload: {
      sneaker: sneaker,
      id: sneaker._id,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: types.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustQuantity = (itemID, quantity) => {
  return {
    type: types.ADJUST_QUANTITY,
    payload: {
      id: itemID,
      quantity,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: types.LOAD_CURRENT_ITEM,
    payload: item,
  };
};

export const emptyCart = () => {
  return {
    type: types.EMPTY_CART,
  };
};

export const addNewOrder = (newOrder) => {
  return async (dispatch) => {
    try {
      await fetchWithoutToken("orders", newOrder, "POST");
      dispatch(newOrderAction(newOrder));
      Swal.fire({
        icon: "success",
        title: "Order created successfully",
      });
    } catch (error) {
      console.log(error);
    }
  };
};

const newOrderAction = (newOrder) => {
  return {
    type: types.NEW_ORDER,
    payload: newOrder,
  };
};

export const getOrders = () => {
  return async (dispatch) => {
    try {
      const resp = await fetchWithoutToken("orders");
      const data = await resp.json();
      dispatch(getOrdersSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const getOrdersSuccess = (orders) => {
  return {
    type: types.GET_ORDERS,
    payload: orders,
  };
};
