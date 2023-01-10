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
} from "./NavbarStyle";
import { HiMenu } from "react-icons/hi";
import cartImg from "../../img/carrito.png";
import { animateScroll as scroll } from "react-scroll";
import { UserContext } from "../Context/UserContext";
import { useSelector } from "react-redux";
import UserImg from "../../img/blankuser.png";

const Navbar = ({ toggle }) => {
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

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Nike
          </NavLogo>
          <NavCartMobile>
            <NavCartMobileBtn>
              <NavCartMobileBtnImg src={cartImg} onClick={toggleCart} />
              <CartItemsMobile cartCount={cartCount}>
                {cartCount}
              </CartItemsMobile>
            </NavCartMobileBtn>
          </NavCartMobile>
          <ToggleIcon>
            <HiMenu onClick={toggle} />
          </ToggleIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="/#hero"
                smooth={true}
                scroll={(el) => scrollWithOffset(el, -80)}
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
            <NavBtnLink>
              <NavCartBtn src={cartImg} onClick={toggleCart} />
              <CartItems cartCount={cartCount}>{cartCount}</CartItems>
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
