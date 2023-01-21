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
      </HeroBackground>
    </HeroContainer>
  );
};

export default Hero;
