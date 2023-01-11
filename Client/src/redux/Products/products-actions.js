// import axiosClient from "../../helpers/axios.js";
import { fetchWithoutToken, fetchWithToken } from "../../helpers/fetch.js";
import { types } from "./products-types.js";
import Swal from "sweetalert2";

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
      Swal.fire({
        icon: "success",
        text: "Product updated successfully",
        timer: 2000,
      });
      dispatch(productUpdatedSuccess(updatedProduct));
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteProduct = (item) => {
  return async (dispatch) => {
    try {
      await fetchWithToken(`products/${item._id}`, {}, "DELETE");
      Swal.fire({
        icon: "success",
        text: "Product deleted successfully",
        timer: 2000,
      });
      dispatch(productDeleteSuccess(item._id));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addProduct = (newProduct) => {
  return async (dispatch) => {
    try {
      await fetchWithToken("products", newProduct, "POST");
      dispatch(productAdd());
      dispatch(getProducts());
      Swal.fire({
        icon: "success",
        title: "Product added successfully",
        timer: 2000,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

const productAdd = () => {
  return {
    type: types.PRODUCT_ADD_PRODUCT,
  };
};

const productDeleteSuccess = (id) => {
  return {
    type: types.PRODUCT_DELETE_SUCCESSFULLY,
    payload: id,
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

const updateProduct = () => {
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
