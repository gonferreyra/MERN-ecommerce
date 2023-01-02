import axiosClient from "../../helpers/axios.js";
import { types } from "./products-types.js";

// Function that download products from data base
export const getProducts = () => {
    return async (dispatch) => {
        dispatch(downloadProducts())
        try {
            const resp = await axiosClient.get('/api/products');
            dispatch(downloadProductsSuccess(resp.data))
        } catch (error) {
            console.log(error)
            dispatch(downloadProductsError())
        }
    }
}

const downloadProducts = () => {
    return {
        type: types.START_DOWNLOADING_PRODUCTS,
        payload: true
    }
}

const downloadProductsSuccess = (products) => {
    return {
        type: types.PRODUCT_DOWNLOAD_SUCCESSFULL,
        payload: products
    }
};

const downloadProductsError = () => {
    return {
        type: types.PRODUCT_DOWNLOAD_ERROR,
        payload: true
    }
};