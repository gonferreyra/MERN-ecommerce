import { types } from "./products-types.js";

const initialState = {
  products: [],
  error: null,
  loading: false,
  currentItem: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_DOWNLOADING_PRODUCTS:
      return {
        ...state,
        loading: action.payload,
      };
    case types.PRODUCT_DOWNLOAD_SUCCESSFULL:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case types.PRODUCT_DOWNLOAD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.PRODUCT_LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    case types.PRODUCT_UPDATED_SUCCESSFULLY:
      return {
        ...state,
        currentItem: null,
        products: state.products.map((product) =>
          // Me reemplaza todo y pierdo los datos que no ingreso como imgUrl... ver como hacer para que reemplace solo los modificados
          product._id === action.payload._id
            ? (product = action.payload)
            : product
        ),
      };
    default:
      return state;
  }
};

export default productReducer;
