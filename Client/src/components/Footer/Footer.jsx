import React, { useContext } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  WebsiteLink,
  SocialIcons,
  SocialIconLink,
} from "./FooterStyle";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { UserContext } from "../Context/UserContext";

const Footer = () => {
  const { cartIsOpen } = useContext(UserContext);

  // Scroll to top function, react-scroll
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer id="footer" cartIsOpen={cartIsOpen}>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact</FooterLinkTitle>
              <FooterLink>Contact</FooterLink>
              <FooterLink>Support</FooterLink>
              <FooterLink>Email</FooterLink>
              <FooterLink>dasdasdasd</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink>Location</FooterLink>
              <FooterLink>Terms of services</FooterLink>
              <FooterLink>dadadsa</FooterLink>
              <FooterLink>dasdasdasd</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink>Twitter</FooterLink>
              <FooterLink>Youtube</FooterLink>
              <FooterLink>Instagram</FooterLink>
              <FooterLink>Facebook</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Nike Store
            </SocialLogo>
            <WebsiteRights>
              <WebsiteLink
                href="https://github.com/gonferreyra/"
                target="_blank"
              >
                Gonzalo Ferreyra © {new Date().getFullYear()} All rights
                reserved.
              </WebsiteLink>
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
