import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const AdminRoute = () => {
  const auth = useSelector((state) => state.auth);

  return auth.role === "ADMIN_ROLE" ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoute;
