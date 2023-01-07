import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled.div`
  width: 210px;
  /* height: 300px; */
  margin: 2rem 1rem;
  border: 1px solid gray;
  border-radius: 5px;

  /* &:hover {
    border: 1px solid gray;
    border-radius: 5px;
  } */
`;

export const CardImg = styled.div`
  text-align: center;
`;

export const SneakerImg = styled.img`
  /* width: 100%; */
  width: 170px;
  height: 170px;
  object-fit: cover;
  padding: 0.5rem;
`;

export const CardInfoContainer = styled.div`
  padding: 1rem;
`;

export const CardName = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;

export const CardPrice = styled.p`
  margin: 0.5rem 0;
  font-weight: 500;
  font-size: 1.1rem;
`;

export const CardBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  transition: all 0.5s ease-in-out;
`;

export const CardBtn = styled.div``;

export const Btn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  margin: auto;
  padding: 8px 0;
  height: 35px;
  border: none;
  border-radius: 10px;
  gap: 7px;
  cursor: pointer;
  text-decoration: none;
  background-color: black;
  color: #fff;

  &:hover {
    transition: all 0.5s ease-in-out;
    color: red;
  }
`;
