import { types } from "./auth-types";
import { uiFinishLoading, uiStartLoading } from "../UiReducer/ui-actions";
import Swal from "sweetalert2";
import { fetchWithoutToken, fetchWithToken } from "../../helpers/fetch";
import { auth, provider } from "../../firebase/firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";

export const startLogin = (email, password) => {
  return async (dispatch) => {
    dispatch(uiStartLoading());
    const resp = await fetchWithoutToken("auth", { email, password }, "POST");
    const data = await resp.json();

    if (data.ok) {
      localStorage.setItem("token", data.token);
      // Date and time when token is created
      // localStorage.setItem('token-init-date', new Date().getTime());

      dispatch(
        loginServer({
          uid: data.uid,
          name: data.name,
          role: data.role,
        })
      );
      Swal.fire({
        title: "Login successfull",
        icon: "success",
        timer: 2000,
      });
      dispatch(uiFinishLoading());
    } else {
      Swal.fire("Error", data.msg, "error");
      dispatch(uiFinishLoading());
    }
  };
};

export const startRegister = (name, email, password) => {
  return async (dispatch) => {
    dispatch(uiStartLoading());
    const resp = await fetchWithoutToken(
      "users/new",
      { name, email, password },
      "POST"
    );
    const data = await resp.json();

    if (data.ok) {
      localStorage.setItem("token", data.token);
      //
      dispatch(
        loginServer({
          uid: data.uid,
          name: data.name,
          role: data.role,
        })
      );
      Swal.fire({
        title: "Register successfull. You are now logged in",
        icon: "success",
        timer: 2000,
      });
      dispatch(uiFinishLoading());
    } else {
      Swal.fire("Error", data.msg, "error");
      dispatch(uiFinishLoading());
    }
  };
};

export const startChecking = () => {
  return async (dispatch) => {
    const resp = await fetchWithToken("auth/renew");
    const data = await resp.json();
    // console.log(data)

    if (data.ok) {
      localStorage.setItem("token", data.token);
      dispatch(
        loginServer({
          uid: data.uid,
          name: data.name,
          role: data.role,
        })
      );
    } else {
      // Swal.fire('Error', data.msg, 'error');
      dispatch(checkingFinish());
    }
  };
};

// const checkingFinish = () => ({ type: types.checkingFinish });
export const checkingFinish = () => ({
  type: types.checkingFinish,
});

const loginServer = (user) => {
  return {
    type: types.loginServer,
    payload: user,
  };
};

// export const login = (uid, displayName) => {
//     return {
//         type: types.login,
//         payload: {
//             uid,
//             displayName,
//         }
//     }
// };

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(logout());
  };
};

export const logout = () => ({
  type: types.logout,
});

// Firebase Auth
export const startGoogleLogin = () => {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      // Destructuring user from result
      .then(async ({ user }) => {
        // console.log(user.accessToken)
        await dispatch(loginGoogle(user.uid, user.displayName, user.photoURL));
        Swal.fire({
          title: "Login successfull",
          icon: "success",
          timer: 2000,
        });
      });
  };
};

export const loginGoogle = (uid, displayName, photoURL) => {
  return {
    type: types.loginGoogle,
    payload: {
      uid,
      displayName,
      photoURL,
    },
  };
};

export const startGoogleLogout = () => {
  return async (dispatch) => {
    await signOut(auth)
      .then(() => {
        dispatch(logoutGoogle());
      })
      .catch((error) => console.log(error));
  };
};

export const logoutGoogle = () => ({
  type: types.logoutGoogle,
});
