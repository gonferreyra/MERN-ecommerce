import styled from "styled-components";
import { Link } from "react-router-dom";

export const AdminContainer = styled.div`
  min-height: 100vh;
  padding: 48px;
  max-width: 1100px;
  margin: auto;
`;

export const AdminH1 = styled.h1`
  margin-bottom: 1rem;
`;

export const NewItemBtn = styled(Link)`
  padding: 10px 23px;
  height: 35px;
  border: none;
  border-radius: 10px;
  gap: 7px;
  cursor: pointer;
  text-decoration: none;
  background-color: green;
  color: #fff;

  &:hover {
    transition: all 0.5s ease-in-out;
    color: black;
  }
`;

export const ItemsContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;