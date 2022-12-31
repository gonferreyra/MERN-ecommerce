import React, { useContext } from "react";
import {
  HeroContainer,
  HeroBackground,
  HerobackgrundImageTest,
} from "./HeroStyle";
import { UserContext } from "../Context/UserContext";

const Hero = () => {
  const { cartIsOpen } = useContext(UserContext);

  return (
    <HeroContainer id="hero" cartIsOpen={cartIsOpen}>
      <HeroBackground>
        <HerobackgrundImageTest
          src={require("../../img/nikelogo2.gif")}
          alt="test"
          style={{
            width: "100%",
            objectFit: "cover",
          }}
        />
        {/* <HeroBackgroundVideo autoPlay loop muted src={Video} type="video/mp4" /> */}
      </HeroBackground>
      {/* <HeroContent>
        <HeroContentH1>Nike Store</HeroContentH1>
        <HeroContentP>Get the latest shoes</HeroContentP>
        <HeroContentBtn>
          <HeroButton to="/login">Login</HeroButton>
        </HeroContentBtn>
      </HeroContent> */}
    </HeroContainer>
  );
};

export default Hero;
