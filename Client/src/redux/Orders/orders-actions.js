import Swal from "sweetalert2";
import { fetchWithoutToken } from "../../helpers/fetch";
import { types } from "./order-types";

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
