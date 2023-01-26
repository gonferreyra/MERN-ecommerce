import { types } from "./auth-types";

const initialState = {
  checking: true,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loginServer:
      return {
        ...state,
        ...action.payload,
        checking: false,
      };
    case types.checkingFinish:
      return {
        ...state,
        checking: false,
      };
    case types.logout:
      return {
        checking: false,
      };
    case types.loginGoogle:
      return {
        uid: action.payload.uid,
        name: action.payload.name,
        photo: action.payload.img,
        role: action.payload.role,
        checking: false,
      };
    case types.logoutGoogle:
      return {
        checking: false,
      };
    default:
      return state;
  }
};
