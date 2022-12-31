import styled from 'styled-components';

export const CartContentContainer = styled.div`
    /* background-color: #f6f6f6; */
    border-top: 1px solid gray;
    /* border-bottom: 1px solid gray; */
    padding: 10px;
`

export const CartBox = styled.div`
    display: grid;
    grid-template-columns: 32% 50% 18%;
    align-items: center;
    gap: 5px;
    /* margin-top: 1rem; */
`

export const CartImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* padding: 2px; */
`

export const ProductDetailBox = styled.div`
    display: grid;
    row-gap: 0.5rem;
`

export const CartProductTitle = styled.h3`
    font-size: 1rem;
    text-transform: uppercase;
`

export const CartProductPrice = styled.p`
    font-weight: 500;
`

export const CartQuantityContainer = styled.div`

`

export const CartQuantityLabel = styled.label`

`

export const CartProductQuantity = styled.input`
    border: 0;
    outline: none;
    width: 2.5rem;
    text-align: center;
    font-size: 1rem;
    background: transparent;

    // Remove the arrows form input
    /* ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }     */
`