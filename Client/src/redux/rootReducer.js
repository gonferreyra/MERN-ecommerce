import { combineReducers } from "redux";
import { authReducer } from "./Auth/authReducer";
import ordersReducer from "./Orders/order-reducer";
import productReducer from "./Products/products-reducer";
import shopReducer from "./Shopping/shopping-reducer";
import { uiReducer } from "./UiReducer/ui-reducer";

const rootReducer = combineReducers({
  shop: shopReducer,
  auth: authReducer,
  ui: uiReducer,
  products: productReducer,
  orders: ordersReducer,
});

export default rootReducer;
