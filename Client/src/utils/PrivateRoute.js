import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const auth = useSelector((state) => state.auth);
  // console.log(isLoggedIn)
  return auth.uid && auth.role === "USER_ROLE" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
