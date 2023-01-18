import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const UserMenuProtectedRoute = () => {
  const auth = useSelector((state) => state.auth);

  return auth.role === "USER_ROLE" ? <Outlet /> : <Navigate to="/" />;
};

export default UserMenuProtectedRoute;
