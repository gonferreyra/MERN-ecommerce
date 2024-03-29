import { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "../helpers/ScrollToTop";
import Home from "../pages/Home";
import Cart from "../components/Cart/Cart";
import { UserContext } from "../components/Context/UserContext";
import Footer from "../components/Footer/Footer";
import Login from "../components/Login/Login";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import SneakerItem from "../components/SneakersSection/SneakerItem/SneakerItem";
import Register from "../components/Login/Register/Register";
import { useDispatch, useSelector } from "react-redux";
import { startChecking } from "../redux/Auth/auth-actions";
import Spinner from "../components/Spinner/Spinner";
import PrivateRoute from "../utils/PrivateRoute";
import { getProducts } from "../redux/Products/products-actions";
import AdminRoute from "../utils/AdminRoute";
import Admin from "../components/Admin/Admin";
import EditItem from "../components/Admin/EditItem/EditItem";
import AddItem from "../components/Admin/AddItem/AddItem";
import CheckOut from "../components/Checkout/CheckOut";
import { getOrders } from "../redux/Shopping/shopping-actions.js";
import UserMenu from "../components/UserMenu/UserMenu";
import UserMenuProtectedRoute from "../utils/UserMenuProtectedRoute";

const RouterApp = () => {
  const { isOpen, toggle } = useContext(UserContext);

  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const { checking, uid } = authState;

  const productsAPIState = useSelector((state) => state.products);
  const { loading } = productsAPIState;

  // Keep auth state, renew token to keep login alive
  useEffect(() => {
    dispatch(startChecking());
    dispatch(getProducts());
    dispatch(getOrders());
  }, [dispatch]);

  // Spinner
  if (checking || loading) {
    return <Spinner />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar isOpen={isOpen} toggle={toggle} />
      <Cart />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/product/:id" element={<SneakerItem />} />
        <Route path="/admin/:id" element={<EditItem />} />
        <Route path="/admin/add" element={<AddItem />} />
        <Route
          path="/register"
          element={uid ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/login" element={uid ? <Navigate to="/" /> : <Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/checkout" element={<CheckOut />} />
        </Route>
        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route element={<UserMenuProtectedRoute />}>
          <Route path="/usermenu" element={<UserMenu />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouterApp;
