import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Main = styled.main`
    padding: 3rem 0;
    background-color: #6e85b7;
    opacity: ${({ cartIsOpen }) => cartIsOpen ? "0.7" : "1"};
`

export const RegisterSection = styled.section``

export const RegisterContainer = styled.div``

export const FormBox = styled.div`
    background-color: #fff;
    border-radius: 10px;
    max-width: 330px;
    padding: 30px;
    margin: auto;

    @media screen and (min-width: 768px) {
        max-width: 420px;
    }
`

export const RegisterForm = styled.form``

export const RegisterTitle = styled.p`
    font-size: 40px;
    text-align: center;
    padding-bottom: 1rem;
    font-weight: 600;
`

export const InputDataContainer = styled.div`
    padding: 0 2rem;
`

export const FormDataContainer = styled.div`
    margin-top: 1.2rem;
`

export const Span = styled.span`
    font-size: 14px;
    font-weight: 600;
`

export const Data = styled.div`
    display: flex;
    border-bottom: 2px solid gray;
`

export const Input = styled.input`
    width: 100%;
    border: none;
    cursor: pointer;
    outline: none;
    font-family: inherit;
    font-size: 16px;
`

export const FormError = styled.div`
    width: 100%;
    /* height: 40px; */
    line-height: 24px;
    text-align: center;
    margin: 1rem auto;
    background: red;
    border-radius: 5px;
`

export const FormErrorP = styled.p`
    /* background: red; */
    color: white;
`

export const FormBtn = styled.div``

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
`

export const Return = styled.div`
    margin: 1rem auto;
`

export const ReturnLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    display: flex;
    gap: 0.6rem;
    padding: 0 2rem;

    &:hover {
        color: red;
        text-decoration: underline;
    }
`