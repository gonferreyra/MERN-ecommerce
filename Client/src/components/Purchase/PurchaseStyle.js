import styled from "styled-components";

export const ExitSection = styled.section`
    min-height: calc(100vh - 80px);
    background-color: #6e85b7;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ItemsContainer = styled.div`
    margin: 1rem 0;
    padding: 1rem;
`

export const TitleHead = styled.div`
    background: #f5f5f5;
    display: grid;
    align-items: center;
    grid-template-columns: .8fr 1.5fr .9fr .8fr;
    grid-template-rows: 40px;
    border-radius: 5px;
    max-width: 940px;
    margin: 0.5rem auto;
    padding: 1rem;
    width: 100%;
`

export const HeadImg = styled.p``

export const HeadName = styled.p``

export const HeadQty = styled.p`
    text-align: center;
`
export const HeadPrice = styled.p`
    text-align: center;
`

export const PaymentContainer = styled.div`
    padding: 1rem;
`

export const PaymentContainerBox = styled.div`
    background: #f5f5f5;
    margin: .5rem auto;
    border-radius: 5px;
    max-width: 350px;
    /* height: 72px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`

export const ButtonCash = styled.button`
    width: 60px;
    height: 40px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    background: black;
    color: white;

    &:hover {
        scale: 1.1;
        color: red;
    }

    &:focus {
        color: red;
    }
`

export const ButtonCreditCard = styled.button`
    width: 60px;
    height: 40px;
    border-radius: 5px;
    border: none;
    cursor: not-allowed;
    background: black;
    color: white;
`

export const ButtonPaypal = styled.button`
    width: 60px;
    height: 40px;
    border-radius: 5px;
    border: none;
    cursor: not-allowed;
    background: black;
    color: white;
`

export const TotalContainer = styled.div`
    padding: 1rem;
`

export const TotalContainerBox = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: .8fr 1.5fr .9fr .8fr;
    grid-template-rows: 40px ;
    grid-template-areas: 
    ". . Total TotalNumber"
    ;
    background: #f5f5f5;
    border-radius: 5px;
    max-width: 940px;
    margin: .5rem auto;
    padding: 1rem;
    width: 100%;
`

export const Total = styled.p`
    grid-area: TotalNumber;
    justify-self: end;
    font-size: 20px;
    padding-right: 1rem;
    font-weight: 600;

    @media screen and (min-width: 768px) {
        /* padding-right: 2rem; */
    }
`

export const Span = styled.span`
    grid-area: Total;
    /* font-size: 13px; */
    justify-self: center;
    font-size: 20px;
    font-weight: 600;
`

export const Confirm = styled.button`
    width: 100px;
    height: 40px;
    margin: 1rem auto;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    color: white;
    background: black;
    opacity: ${({ disabled }) => disabled ? "0.6" : "1"};
    cursor: ${({ disabled }) => (!disabled ? 'pointer' : null)}; 

    &:hover:not([disabled]) {
        scale: 1.1;
        color: red;
    }
`