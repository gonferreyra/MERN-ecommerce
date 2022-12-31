import styled from "styled-components";

export const ItemsContainer = styled.div`
    background: #f5f5f5;
    border-radius: 5px;
    max-width: 940px;
    margin: auto;
`

export const Item = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: .8fr 1.5fr .9fr .8fr;
    grid-template-rows: 150px;
    column-gap: 10px;
    padding: 1rem;
    margin: .5rem auto;
    grid-template-areas: "    ImgContainer TextContainer QtyContainer PriceContainer
    ";
    
`

export const ImgContainer = styled.div`
    grid-area: ImgContainer;
    height: 100%;
    width: 100%;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

export const TextContainer = styled.div`
    grid-area: TextContainer;
`

export const Name = styled.p`
    font-size: 20px;
    font-weight: 600;
`

export const QtyContainer = styled.div`
    grid-area: QtyContainer;
    justify-self: center;
`

export const Qty = styled.input`
    width: 40px;
    text-align: center;
    border: none;
    background: transparent;
    font-size: 16px;
    font-family: inherit;
    font-weight: 600;
`

export const PriceContainer = styled.div`
    grid-area: PriceContainer;
    justify-self: end;
    padding-right: 1rem;
    font-weight: 600;

    @media screen and (min-width: 768px) {
        padding-right: 2rem;
    }
`

export const Price = styled.p``

