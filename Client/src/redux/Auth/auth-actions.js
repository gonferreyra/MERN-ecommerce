import { types } from "./auth-types";
import { uiFinishLoading, uiStartLoading } from "../UiReducer/ui-actions";
import Swal from "sweetalert2";
import { fetchWithoutToken, fetchWithToken } from "../../helpers/fetch";
import { auth, provider } from "../../firebase/firebase-config";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

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

    if (data.ok) {
      localStorage.setItem("token", data.token);
      dispatch(
        loginServer({
          uid: data.uid,
          name: data.name,
          role: data.role,
          img: data.img,
        })
      );
    } else {
      // Swal.fire("Error", data.msg, "error");
      dispatch(checkingFinish());
    }
  };
};

export const checkingFinish = () => ({
  type: types.checkingFinish,
});

const loginServer = (user) => {
  return {
    type: types.loginServer,
    payload: user,
  };
};

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
  return async (dispatch) => {
    dispatch(uiStartLoading());
    signInWithPopup(auth, provider).then(async (result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);

      // Google Token
      const accessToken = credential.idToken;
      const idToken = { accessToken };
      // User data
      const user = result.user;
      const userInfo = { user };

      const resp = await fetch("http://localhost:4000/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken, userInfo }),
      });
      // .then((resp) => resp.json());
      // .then((data) => console.log(data));

      const data = await resp.json();

      if (data.ok) {
        localStorage.setItem("token", data.token);

        dispatch(
          loginGoogle(
            data.user._id,
            data.user.name,
            data.user.img,
            data.user.role
          )
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
    });
  };
};

export const loginGoogle = (uid, name, img, role) => {
  return {
    type: types.loginGoogle,
    payload: {
      uid,
      name,
      img,
      role,
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
