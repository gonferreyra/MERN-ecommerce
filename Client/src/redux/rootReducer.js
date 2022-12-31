import { combineReducers } from "redux";
import { authReducer } from "./Auth/authReducer";
import shopReducer from "./Shopping/shopping-reducer"
import { uiReducer } from "./UiReducer/ui-reducer";

const rootReducer = combineReducers({
    shop: shopReducer,
    auth: authReducer,
    ui: uiReducer,
});

export default rootReducer