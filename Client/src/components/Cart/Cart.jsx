import React, { useContext, useEffect, useState } from "react";

import { IoIosClose } from "react-icons/io";
import { GrUserAdmin } from "react-icons/gr";

import {
  CartContainer,
  AdminMenu,
  AdminMenuBtn,
  UserMenu,
  UserMenuBtn,
  CartTitle,
  CartTotal,
  TotalPrice,
  TotalTitle,
  BtnBuy,
  UserInfo,
  UserInfoName,
  UserInfoImg,
  LogOutBtn,
  ButtonContainer,
  LoginCart,
  RegisterCart,
} from "./CartStyle";
import { UserContext } from "../Context/UserContext";
import { useDispatch, useSelector } from "react-redux";
import CartContent from "./CartContent/CartContent";
import { startGoogleLogout, startLogout } from "../../redux/Auth/auth-actions";
import UserImg from "../../img/blankuser.png";
import { GiPaperTray } from "react-icons/gi";

const Cart = () => {
  const { cartIsOpen, toggleCart } = useContext(UserContext);

  // bring cart and auth from reducer
  const cart = useSelector((state) => state.shop.cart);
  const auth = useSelector((state) => state.auth);

  // Update total
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity * item.item.price;
    });
    setTotalPrice(total);
  }, [cart, totalPrice, setTotalPrice]);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const handleGoogleLogout = () => {
    dispatch(startGoogleLogout());
  };

  return (
    <>
      <CartContainer cartIsOpen={cartIsOpen}>
        {auth?.uid && (
          <UserInfo>
            <UserInfoName>{auth.name}</UserInfoName>
            {auth.img ? (
              <UserInfoImg src={auth.img} alt="profile" />
            ) : (
              (!auth.img || auth.img === "") && (
                <UserInfoImg src={UserImg} alt="profile" />
              )
            )}
          </UserInfo>
        )}
        {auth?.role === "ADMIN_ROLE" && (
          <AdminMenu>
            <AdminMenuBtn to="/admin" onClick={toggleCart}>
              <GrUserAdmin />
              Admin Menu
            </AdminMenuBtn>
          </AdminMenu>
        )}
        {auth?.role === "USER_ROLE" && (
          <UserMenu>
            <UserMenuBtn to="/usermenu" onClick={toggleCart}>
              <GiPaperTray />
              Previus Orders
            </UserMenuBtn>
          </UserMenu>
        )}

        <IoIosClose
          style={{
            position: "absolute",
            right: "0",
            fontSize: "2rem",
            cursor: "pointer",
          }}
          onClick={toggleCart}
        />

        {cart.length === 0 ? (
          <CartTitle>No items in cart</CartTitle>
        ) : (
          <>
            <CartTitle>Your Cart</CartTitle>
            {cart.map((item, i) => (
              <CartContent key={i} data={item} />
            ))}
            <CartTotal>
              <TotalTitle>Total</TotalTitle>
              <TotalPrice>$ {totalPrice}</TotalPrice>
            </CartTotal>
            {auth?.uid && (
              <BtnBuy to="/checkout" onClick={toggleCart}>
                Buy
              </BtnBuy>
            )}
          </>
        )}
        {auth.google ? (
          <LogOutBtn
            onClick={() => {
              handleGoogleLogout();
              toggleCart();
            }}
          >
            Logout
          </LogOutBtn>
        ) : auth.uid ? (
          <LogOutBtn
            onClick={() => {
              handleLogout();
              toggleCart();
            }}
          >
            Logout
          </LogOutBtn>
        ) : (
          <ButtonContainer>
            {" "}
            <LoginCart to="/login" onClick={toggleCart}>
              Login
            </LoginCart>
            <RegisterCart to="/register" onClick={toggleCart}>
              Register
            </RegisterCart>
          </ButtonContainer>
        )}
      </CartContainer>
    </>
  );
};

export default Cart;
