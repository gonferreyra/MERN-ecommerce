import React, { useContext } from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
  ButtonBanner,
} from "./NewReleaseSectionStyle";
import Img2 from "../../img/jordan.png";
import { UserContext } from "../Context/UserContext";

const NewReleaseSection = () => {
  const { cartIsOpen } = useContext(UserContext);

  return (
    <InfoContainer cartIsOpen={cartIsOpen}>
      <InfoWrapper>
        <InfoRow>
          <Column1>
            <TextWrapper>
              <TopLine>New Release</TopLine>
              <Heading>JORDAN XXV</Heading>
              <Subtitle>
                Get the latest Jordan shoes, available from today on out shop.
                Log in and start buying.
              </Subtitle>
              <BtnWrap>
                <ButtonBanner to="/#sneakerSection" smooth={true}>
                  Buy now
                </ButtonBanner>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={Img2} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default NewReleaseSection;
