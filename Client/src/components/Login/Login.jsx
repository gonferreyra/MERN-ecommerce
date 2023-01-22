import React, { useContext } from "react";
import {
  Main,
  LoginSection,
  LoginContainer,
  FormBox,
  LoginForm,
  LoginTitle,
  FormUsername,
  Span,
  UserName,
  Input,
  FormPassword,
  UserPassword,
  FormLink,
  ForgotPass,
  FormError,
  FormErrorP,
  FormBtn,
  FormButton,
  FormText,
  FormTextP,
  FormIcons,
  IconBtn,
  Register,
  RegisterLink,
} from "./LoginStyle";
import { FiUser } from "react-icons/fi";
import { BiLock } from "react-icons/bi";
import { AiOutlineGoogle } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { startGoogleLogin, startLogin } from "../../redux/Auth/auth-actions";
import { UserContext } from "../Context/UserContext";
import validator from "validator";
import { uiRemoveError, uiSetError } from "../../redux/UiReducer/ui-actions";

const Login = () => {
  const dispatch = useDispatch();
  const { cartIsOpen } = useContext(UserContext);
  const { msgError } = useSelector((state) => state.ui);

  const [formLoginValues, handleInputChange] = useForm({
    lEmail: "user@email.com",
    lPassword: "123456",
  });

  const { lEmail, lPassword } = formLoginValues;

  const isFormValid = () => {
    if (!validator.isEmail(lEmail)) {
      dispatch(uiSetError("Email is not valid. Please try again."));
      return false;
    } else if (lPassword === "") {
      dispatch(uiSetError("Password can't be empty. Please try again."));
      return false;
    }

    dispatch(uiRemoveError());
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startLogin(lEmail, lPassword));
    }
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <Main cartIsOpen={cartIsOpen}>
      <LoginSection>
        <LoginContainer>
          <FormBox>
            <LoginForm>
              <LoginTitle>Login</LoginTitle>
              <FormUsername>
                <Span>Username</Span>
                <UserName>
                  <FiUser
                    style={{
                      paddingRight: "0.5rem",
                      width: "30px",
                      height: "30px",
                      color: "#71909D",
                    }}
                  />
                  <Input
                    type="email"
                    name="lEmail"
                    value={lEmail}
                    autoComplete="off"
                    onChange={handleInputChange}
                  />
                </UserName>
              </FormUsername>
              <FormPassword>
                <Span>Password</Span>
                <UserPassword>
                  <BiLock
                    style={{
                      paddingRight: "0.5rem",
                      width: "30px",
                      height: "30px",
                      color: "#71909D",
                    }}
                  />
                  <Input
                    type="password"
                    name="lPassword"
                    value={lPassword}
                    onChange={handleInputChange}
                  />
                </UserPassword>
              </FormPassword>
              <FormLink>
                <ForgotPass to="/register">Forgot password?</ForgotPass>
              </FormLink>
              {msgError && (
                <FormError>
                  <FormErrorP>{msgError}</FormErrorP>
                </FormError>
              )}
              <FormBtn>
                <FormButton onClick={handleLogin}>LOGIN</FormButton>
              </FormBtn>
              <FormText>
                <FormTextP>Or Sign Up Using</FormTextP>
              </FormText>
            </LoginForm>
            <FormIcons>
              <IconBtn>
                <AiOutlineGoogle
                  onClick={handleGoogleLogin}
                  style={{
                    color: "white",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#eb3e32",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px",
                  }}
                />
              </IconBtn>

              <RiFacebookFill
                style={{
                  color: "white",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "#3b5998",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                }}
              />
              <RiTwitterFill
                style={{
                  color: "white",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "#1da1f2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                }}
              />
            </FormIcons>
            <Register>
              <RegisterLink to="/register">Create a new account</RegisterLink>
            </Register>
          </FormBox>
        </LoginContainer>
      </LoginSection>
    </Main>
  );
};

export default Login;
