import styled from "styled-components";

export const HeroContainer = styled.div`
    /* background: #0c0c0c; */
    /* background: #101522; */
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    /* height: 800px; */
    height: 100vh;
    position: relative;
    z-index: 1;
    opacity: ${({ cartIsOpen }) => (cartIsOpen ? '0.7' : '1')};
    transition: 0.3s ease-in-out;
`

export const HeroBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    @media screen and (min-width: 1024px) {
        width: 85%;
        margin: auto;
    }
`

export const HerobackgrundImageTest = styled.img`
    width: 100%;
    height: 85%;
    -o-object-fit: cover;
    object-fit: cover;

    @media screen and (max-width: 500px) {
        object-fit: none;
        height: 80%;
    }
`