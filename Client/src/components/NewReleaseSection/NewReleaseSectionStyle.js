import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

export const InfoContainer = styled.div`
  color: #fff;
  /* background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")}; */
  opacity: ${({ cartIsOpen }) => (cartIsOpen ? "0.7" : "1")};
  transition: 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  min-height: 100vh;
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  justify-content: center;
  align-items: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: red;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 55px;
  line-height: 1.1;
  font-weight: 700;
  /* color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")}; */
  color: black;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  /* color: ${({ darkText }) => (darkText ? "#010606" : "#fff")}; */
  color: black;
`;

export const BtnWrap = styled.div`
  /* display: flex;
  justify-content: flex-start; */
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const ButtonBanner = styled(HashLink)`
  font-size: 1rem;
  border-radius: 50px;
  border: none;
  padding: 12px 45px;
  transition: all 0.4s ease;
  background: #f0f0f0;
  text-decoration: none;
  color: black;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    /* scale: 1.2; */
    background: black;
    color: red;
  }
`;
