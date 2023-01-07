import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartContainer = styled.div`
  z-index: 1000;
  position: fixed;
  top: 80px;
  /* right: 0; */
  /* right: -100%; */
  right: ${({ cartIsOpen }) => (cartIsOpen ? "0" : "-100%")};
  width: 250px;
  height: calc(100vh - 80px);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 20px;
  background-color: white;
  border: 1px solide red;
  transition: 0.3s ease-in-out;
  box-shadow: inset 0px -1px 5px 0px black;

  @media screen and (min-width: 1024px) {
    width: 300px;
  }
`;

export const AdminMenu = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px auto;
`;

export const AdminMenuBtn = styled(Link)`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-size: 0.9rem;
  background-color: red;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const CartTitle = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 2rem;
`;

export const CartTotal = styled.div`
  display: flex;
  justify-content: center;
  /* margin-top: 1.5rem; */
  padding: 1rem 10px;
  border-top: 1px solid black;
`;

export const TotalTitle = styled.p`
  font-size: 1rem;
  font-weight: 700;
`;

export const TotalPrice = styled.p`
  margin-left: 0.5rem;
  font-weight: 700;
`;

export const BtnBuy = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem auto 0 auto;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  background-color: black;
  color: white;

  &:hover {
    scale: 1.1;
    color: red;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem auto;
  gap: 0.5rem;
`;

export const UserInfoName = styled.p``;

export const UserInfoImg = styled.img`
  width: 40px;
  border-radius: 50%;
  background-color: aliceblue;
`;

export const LogOutBtn = styled.button`
  position: relative;
  top: 10px;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border: none;
  left: calc(50% - 50px);
  margin: 0.5rem auto;
  font-size: 1rem;
  background-color: black;
  color: #fff;
  cursor: pointer;

  &:hover {
    scale: 1.1;
    color: red;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 1rem auto;
  text-align: center;
`;

export const LoginCart = styled(Link)`
  padding: 10px 13px;
  width: 75px;
  background: black;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
`;

export const RegisterCart = styled(Link)`
  padding: 10px 13px;
  width: 75px;
  background: black;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
`;
