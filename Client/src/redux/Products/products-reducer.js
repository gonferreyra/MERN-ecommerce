import { types } from './products-types.js'

const initialState = {
    products: [],
    error: null,
    loading: false
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.START_DOWNLOADING_PRODUCTS:
            return {
                ...state,
                loading: action.payload
            }
        case types.PRODUCT_DOWNLOAD_SUCCESSFULL:
            return {
                ...state,
                loading: false,
                error: null,
                products: action.payload
            }
        case types.PRODUCT_DOWNLOAD_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
};

export default productReducer;