import React from "react";
import { useSelector } from "react-redux";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  UserInfo,
  UserInfoName,
  UserInfoImg,
} from "./SidebarStyle";
import UserImg from "../../img/blankuser.png";

//FIX OFFSETS OF LINKS AND CHANGE IT TO ROUTER-HASH
//Replace reactscroll offset with a function and react-router-hash:
const scrollWithOffset = (el, offsety) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = offsety;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const Sidebar = ({ isOpen, toggle }) => {
  const auth = useSelector((state) => state.auth);

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon values={{ color: "white" }} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="/#hero"
            onClick={toggle}
            scroll={(el) => scrollWithOffset(el, -80)}
          >
            Home
          </SidebarLink>
          <SidebarLink
            to="/#sneakerSection"
            onClick={toggle}
            scroll={(el) => scrollWithOffset(el, -80)}
          >
            Sneakers
          </SidebarLink>
          <SidebarLink
            to="/#service"
            onClick={toggle}
            scroll={(el) => scrollWithOffset(el, -80)}
          >
            Services
          </SidebarLink>
          <SidebarLink
            to="/#footer"
            onClick={toggle}
            scroll={(el) => scrollWithOffset(el, -40)}
          >
            About
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          {auth.uid && (
            <UserInfo>
              {auth.photo ? (
                <>
                  <UserInfoName>{auth.name}</UserInfoName>
                  <UserInfoImg src={auth.photo} alt="profileImg" />
                </>
              ) : (
                <>
                  <UserInfoName>{auth.name}</UserInfoName>
                  <UserInfoImg src={UserImg} alt="profileImg" />
                </>
              )}
            </UserInfo>
          )}
          {!auth.uid && (
            <SidebarRoute to="/login" onClick={toggle}>
              Sign In
            </SidebarRoute>
          )}
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
