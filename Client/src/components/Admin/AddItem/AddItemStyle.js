import { Link } from "react-router-dom";
import styled from "styled-components";

export const AddSection = styled.div`
  padding: 3rem 0;
  background-color: #6e85b7;
  opacity: 1;
`;
export const AddContainer = styled.div``;
export const FormBox = styled.div`
  background-color: #fff;
  border-radius: 10px;
  max-width: 330px;
  padding: 35px;
  margin: auto;

  @media screen and (min-width: 768px) {
    max-width: 600px;
  }
`;
export const AddForm = styled.form``;
export const AddTitle = styled.h1`
  font-size: 40px;
  text-align: center;
  padding-bottom: 1rem;
  font-weight: 600;
`;
export const FormItemBox = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`;
export const Span = styled.span`
  font-size: 14px;
  font-weight: 600;
`;
export const Input = styled.input`
  width: 100%;
  border: none;
  cursor: pointer;
  outline: none;
  font-family: inherit;
  font-size: 16px;
  border-bottom: 2px solid gray;
  height: 30px;
`;
export const InputTextArea = styled.textarea`
  font-size: inherit;
  overflow: hidden;
  border: none;
  resize: none;
  /* max-height: 130px; */
  height: 130px;
  margin-top: 5px;
`;
export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const AddBtn = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border: none;
  margin: 0.5rem auto;
  font-size: 1rem;
  background-color: black;
  color: #fff;
  cursor: pointer;
`;
export const ReturnBtn = styled(Link)`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border: none;
  margin: 0.5rem auto;
  font-size: 1rem;
  background-color: black;
  color: #fff;
  cursor: pointer;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
`;
