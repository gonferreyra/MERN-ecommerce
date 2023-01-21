import styled from "styled-components";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const ItemContainer = styled.div`
  background-color: #f6f6f6;
  opacity: ${({ cartIsOpen }) => (cartIsOpen ? "0.7" : "1")};
  min-height: 100vh;
`;

export const GridContainer = styled.div`
  display: grid;
  align-items: center;
  max-width: 1100px;
  /* height: calc(100vh - 80px); */
  margin: auto;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 0.1fr;
  grid-auto-flow: row;
  grid-template-areas:
    "ImgContainer Content"
    "BackBtnContainer BackBtnContainer";
  padding-bottom: 50px;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 0.5fr 0.1fr;
    grid-template-areas:
      "ImgContainer"
      "Content"
      "BackBtnContainer";
  }
`;

export const ImgContainer = styled.div`
  grid-area: ImgContainer;
`;

export const ItemImg = styled.img`
  width: 100%;
`;

export const Content = styled.div`
  grid-area: Content;
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const ContentName = styled.p`
  font-size: 1.5rem;
  font-weight: 800;
  text-transform: uppercase;
`;

export const ContentPrice = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
`;

export const ContentInfo = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
`;

export const ContentBtn = styled.button`
  width: 120px;
  height: 40px;
  font-size: 1rem;
  border-radius: 50px;
  border: none;
  background: black;
  color: red;

  transition: all 0.4s ease;

  &:hover {
    scale: 1.2;
    /* background: black; */
    /* color: red; */
    transition: all 0.4s ease-in-out;
  }
`;

export const BackBtnContainer = styled.div`
  grid-area: BackBtnContainer;
  justify-self: center;
`;

export const BackBtn = styled(HashLink)`
  width: 220px;
  height: 45px;
  font-size: 1rem;
  border-radius: 50px;
  border: none;
  background: black;
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:hover {
    scale: 1.2;
    background: black;
    color: red;
    transition: all 0.4s ease-in-out;
  }
`;
