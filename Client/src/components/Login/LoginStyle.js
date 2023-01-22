import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.main`
  padding: 3rem 0;
  background-color: #6e85b7;
  opacity: ${({ cartIsOpen }) => (cartIsOpen ? "0.7" : "1")};
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LoginSection = styled.section``;

export const LoginContainer = styled.div``;

export const FormBox = styled.div`
  background-color: #fff;
  border-radius: 10px;
  max-width: 330px;
  padding: 35px;
  margin: auto;

  @media screen and (min-width: 768px) {
    max-width: 420px;
  }
`;

export const LoginForm = styled.form``;

export const LoginTitle = styled.p`
  font-size: 40px;
  text-align: center;
  padding-bottom: 1rem;
  font-weight: 600;
`;

export const FormUsername = styled.div`
  margin-top: 1rem;
`;

export const Span = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

export const UserName = styled.div`
  display: flex;
  border-bottom: 2px solid gray;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  cursor: pointer;
  outline: none;
  font-family: inherit;
  font-size: 16px;
`;

export const FormPassword = styled.div`
  margin-top: 1rem;
`;

export const UserPassword = styled.div`
  display: flex;
  border-bottom: 2px solid gray;
`;

export const FormLink = styled.div`
  margin: 0.5rem 0;
  text-align: right;
`;

export const ForgotPass = styled.a`
  text-decoration: none;
  font-size: 12px;
`;

export const FormError = styled.div`
  width: 100%;
  line-height: 24px;
  text-align: center;
  margin: 1rem auto;
  background: red;
  border-radius: 5px;
`;

export const FormErrorP = styled.p`
  color: white;
`;

export const FormBtn = styled.div``;

export const FormButton = styled.button`
  width: 100%;
  height: 30px;
  margin: 1rem 0;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background: black;
  color: white;

  &:hover {
    scale: 1.1;
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;

export const FormText = styled.div``;

export const FormTextP = styled.p`
  font-size: 13px;
  text-align: center;
`;

export const FormIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem;
  font-size: 25px;
`;

export const IconBtn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const Register = styled.div``;

export const RegisterLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: red;
    text-decoration: underline;
  }
`;
