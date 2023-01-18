import React, { useContext, useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  ToggleIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  UserInfo,
  UserInfoName,
  UserInfoImg,
  NavBtnLink,
  NavCartBtn,
  CartItems,
  NavCartMobile,
  NavCartMobileBtn,
  NavCartMobileBtnImg,
  CartItemsMobile,
  NavBtnLogout,
  NavLogoutBtnMobileContainer,
} from "./NavbarStyle";
import { HiMenu } from "react-icons/hi";
import cartImg from "../../img/carrito.png";
import { animateScroll as scroll } from "react-scroll";
import { UserContext } from "../Context/UserContext";
import { useDispatch, useSelector } from "react-redux";
import UserImg from "../../img/blankuser.png";
import { AiOutlineLogout } from "react-icons/ai";
import { startLogout } from "../../redux/Auth/auth-actions";

const Navbar = ({ toggle, googleLogin }) => {
  // Scroll to top function, react-scroll
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const { toggleCart } = useContext(UserContext);

  // connect state from store to component
  const cartState = useSelector((state) => state.shop.cart);
  // console.log(cartState);
  const auth = useSelector((state) => state.auth);

  // number above cart
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    // count all the items including the quantity of each product
    cartState.forEach((item) => {
      count += item.quantity;
    });

    setCartCount(count);
  }, [cartState, cartCount]);

  //Replace reactscroll offset with a function and react-router-hash:
  const scrollWithOffset = (el, offsety) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = offsety;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Nike
          </NavLogo>
          {auth.role === "ADMIN_ROLE" ? (
            <NavLogoutBtnMobileContainer>
              <NavBtnLogout onClick={handleLogout}>
                <AiOutlineLogout
                  style={{
                    color: "white",
                  }}
                  size="20px"
                />
              </NavBtnLogout>
            </NavLogoutBtnMobileContainer>
          ) : (
            <NavCartMobile>
              <NavCartMobileBtn>
                <NavCartMobileBtnImg src={cartImg} onClick={toggleCart} />
                <CartItemsMobile cartCount={cartCount}>
                  {cartCount}
                </CartItemsMobile>
              </NavCartMobileBtn>
            </NavCartMobile>
          )}
          <ToggleIcon>
            <HiMenu onClick={toggle} />
          </ToggleIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="/#hero"
                smooth={true}
                scroll={(el) => scrollWithOffset(el, -80)}
                style={{
                  paddingLeft: "0",
                }}
              >
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="/#sneakerSection"
                smooth={true}
                scroll={(el) => scrollWithOffset(el, -80)}
              >
                Sneakers
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="/#service"
                smooth={true}
                scroll={(el) => scrollWithOffset(el, -80)}
              >
                Services
              </NavLinks>
            </NavItem>
            {!auth.uid && (
              <NavItem>
                <NavLinks to="/login" smooth={true}>
                  Login
                </NavLinks>
              </NavItem>
            )}
            {auth.role === "ADMIN_ROLE" ? (
              <NavItem>
                <NavLinks
                  to="/admin"
                  smooth={true}
                  style={{
                    color: "orange",
                  }}
                >
                  Admin Menu
                </NavLinks>
              </NavItem>
            ) : (
              auth.role === "USER_ROLE" && (
                <NavItem>
                  <NavLinks
                    to="/usermenu"
                    smooth={true}
                    style={{
                      color: "orange",
                    }}
                  >
                    User Menu
                  </NavLinks>
                </NavItem>
              )
            )}
          </NavMenu>
          <NavBtn>
            {auth.uid && (
              <UserInfo>
                <UserInfoName>{auth.name}</UserInfoName>
                {auth.photo ? (
                  <UserInfoImg
                    src={auth.photo}
                    referrerPolicy="no-referrer"
                    alt="profilePicture"
                  />
                ) : (
                  <UserInfoImg src={UserImg} alt="profilePicture" />
                )}
              </UserInfo>
            )}
            {auth.role === "ADMIN_ROLE" ? (
              <NavBtnLogout
                style={{
                  marginRight: "24px",
                }}
                onClick={handleLogout}
              >
                <AiOutlineLogout
                  style={{
                    color: "white",
                  }}
                  size="20px"
                />
              </NavBtnLogout>
            ) : (
              <NavBtnLink>
                <NavCartBtn src={cartImg} onClick={toggleCart} />
                <CartItems cartCount={cartCount}>{cartCount}</CartItems>
              </NavBtnLink>
            )}
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
