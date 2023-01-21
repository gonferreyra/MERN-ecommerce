import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled.div`
  max-width: 300px;
  /* height: 300px; */
  margin: 2rem auto;
  border: 1px solid transparent;
  /* max-height: 516px; */
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: all 0.5s ease-in-out;
    border-color: gray;
    border-radius: 5px;
  }
`;

export const CardImg = styled.div``;

export const SneakerImg = styled.img`
  /* width: 100%; */
  width: 289px;
  height: 330px;
  object-fit: cover;
  padding: 0.5rem;
`;

export const CardInfoContainer = styled.div`
  padding: 1rem;
`;

export const CardName = styled.p`
  font-size: 2rem;
  font-weight: 600;
`;

export const CardPrice = styled.p`
  margin: 0.5rem 0;
  font-weight: 500;
  font-size: 1.1rem;
`;

export const CardHoverContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: all 0.5s ease-in-out;
  /* height: 0; */
  overflow: hidden;
  border-top: 1px solid gray;
  /* margin: 0.5rem 0; */
  padding-top: 1rem;

  /* ${Card}:hover & {
    transition: all 0.5s ease-in-out;
    margin: 0.5rem 0;
    border-top: 1px solid gray;
    padding-top: 1rem;
    height: auto;
  } */
`;

export const CardBtn = styled.div``;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 35px;
  border: none;
  border-radius: 10px;
  gap: 10px;
  cursor: pointer;
  /* background: transparent; */

  &:hover {
    transition: all 0.5s ease-in-out;
    color: red;
  }
`;

export const CardIcons = styled(Link)``;

export const IconBtn = styled.button`
  /* width: 50px; */
  height: 35px;
  border: none;
  border-radius: 10px;
  background: transparent;
  cursor: pointer;

  &:hover {
    transition: all 0.5s ease-in-out;
    color: red;
  }
`;
