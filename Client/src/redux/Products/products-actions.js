import axiosClient from "../../helpers/axios.js";
import { fetchWithoutToken, fetchWithToken } from "../../helpers/fetch.js";
import { types } from "./products-types.js";

// Function that download products from data base
export const getProducts = () => {
  return async (dispatch) => {
    dispatch(downloadProducts());
    try {
      const resp = await fetchWithoutToken("products");
      const data = await resp.json();
      dispatch(downloadProductsSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(downloadProductsError());
    }
  };
};

export const updateProductAction = (updatedProduct) => {
  return async (dispatch) => {
    dispatch(updateProduct());
    try {
      await fetchWithToken(
        `products/${updatedProduct._id}`,
        updatedProduct,
        "PUT"
      );
      dispatch(productUpdatedSuccess(updatedProduct));
    } catch (error) {
      console.log(error);
    }
  };
};

const downloadProducts = () => {
  return {
    type: types.START_DOWNLOADING_PRODUCTS,
    payload: true,
  };
};

const downloadProductsSuccess = (products) => {
  return {
    type: types.PRODUCT_DOWNLOAD_SUCCESSFULL,
    payload: products,
  };
};

const downloadProductsError = () => {
  return {
    type: types.PRODUCT_DOWNLOAD_ERROR,
    payload: true,
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: types.PRODUCT_LOAD_CURRENT_ITEM,
    payload: item,
  };
};

const updateProduct = (id, product) => {
  return {
    type: types.PRODUCT_UPDATE,
  };
};

const productUpdatedSuccess = (updatedProduct) => {
  return {
    type: types.PRODUCT_UPDATED_SUCCESSFULLY,
    payload: updatedProduct,
  };
};
