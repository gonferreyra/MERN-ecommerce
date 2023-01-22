import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Main,
  RegisterSection,
  RegisterContainer,
  FormBox,
  RegisterForm,
  RegisterTitle,
  InputDataContainer,
  FormDataContainer,
  Span,
  Data,
  Input,
  FormError,
  FormErrorP,
  FormBtn,
  FormButton,
  Return,
  ReturnLink,
} from "./RegisterStyle";
import { MdKeyboardReturn } from "react-icons/md";
import { useForm } from "../../../hooks/useForm";
import validator from "validator";
import { uiRemoveError, uiSetError } from "../../../redux/UiReducer/ui-actions";
import { startRegister } from "../../../redux/Auth/auth-actions";
import { UserContext } from "../../Context/UserContext";

const Register = () => {
  const dispatch = useDispatch();
  const { cartIsOpen } = useContext(UserContext);

  // connect state from store to component
  const msgError = useSelector((state) => state.ui.msgError);
  // console.log(msgError);

  const [formRegisterValues, handleRegisterInputChange] = useForm({
    rName: "Name",
    rEmail: "user@email.com",
    rPassword: "123456",
    rPasswordConfirm: "123456",
  });

  const { rName, rEmail, rPassword, rPasswordConfirm } = formRegisterValues;

  const isFormValid = () => {
    if (rName.trim().length === 0) {
      dispatch(uiSetError("Name is required"));
      return false;
    } else if (!validator.isEmail(rEmail)) {
      dispatch(uiSetError("Email is not valid. Please try again."));
      return false;
    } else if (rPassword !== rPasswordConfirm || rPassword.length < 5) {
      dispatch(
        uiSetError(
          "Error. Password must be at least 6 characters and match each other"
        )
      );
      return false;
    }
    dispatch(uiRemoveError());
    return true;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegister(rName, rEmail, rPassword));
    }
  };

  return (
    <Main cartIsOpen={cartIsOpen}>
      <RegisterSection>
        <RegisterContainer>
          <FormBox>
            <RegisterForm onSubmit={handleRegister}>
              <RegisterTitle>Create a new account</RegisterTitle>
              <InputDataContainer>
                <FormDataContainer>
                  <Span>Name</Span>
                  <Data>
                    <Input
                      type="text"
                      name="rName"
                      autoComplete="off"
                      value={rName}
                      onChange={handleRegisterInputChange}
                    />
                  </Data>
                </FormDataContainer>
                <FormDataContainer>
                  <Span>Email</Span>
                  <Data>
                    <Input
                      type="email"
                      name="rEmail"
                      autoComplete="off"
                      value={rEmail}
                      onChange={handleRegisterInputChange}
                    />
                  </Data>
                </FormDataContainer>
                <FormDataContainer>
                  <Span>Password</Span>
                  <Data>
                    <Input
                      type="password"
                      name="rPassword"
                      value={rPassword}
                      onChange={handleRegisterInputChange}
                    />
                  </Data>
                </FormDataContainer>
                <FormDataContainer>
                  <Span>Confirm password</Span>
                  <Data>
                    <Input
                      type="password"
                      name="rPasswordConfirm"
                      value={rPasswordConfirm}
                      onChange={handleRegisterInputChange}
                    />
                  </Data>
                </FormDataContainer>
                {/* if msgError is true it will render de formerror div. Null values on JS are treated false in boolean operations */}
                {msgError && (
                  <FormError>
                    <FormErrorP>{msgError}</FormErrorP>
                  </FormError>
                )}
                <FormBtn>
                  <FormButton type="submit">REGISTER</FormButton>
                </FormBtn>
              </InputDataContainer>
            </RegisterForm>
            <Return>
              <ReturnLink to="/login">
                <MdKeyboardReturn size={19} />
                Go Back
              </ReturnLink>
            </Return>
          </FormBox>
        </RegisterContainer>
      </RegisterSection>
    </Main>
  );
};

export default Register;
