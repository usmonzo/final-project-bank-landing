import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
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
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>О нас</FooterLinkTitle>
              {/* <FooterLink to="/">Как это работает</FooterLink> */}
              <FooterLink to="/">Отзывы</FooterLink>
              <FooterLink to="/">Карьера</FooterLink>
              <FooterLink to="/">Инвесторы</FooterLink>
              <FooterLink to="/">Условия обслуживания</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Свяжитесь с нами</FooterLinkTitle>
              <FooterLink to="/">Контакты</FooterLink>
              <FooterLink to="/">Помощь</FooterLink>
              <FooterLink to="/">Адресс</FooterLink>
              <FooterLink to="/">Спонсорство</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Проекты</FooterLinkTitle>
              <FooterLink to="/">Предложить проект</FooterLink>
              <FooterLink to="/">Амбасадоры</FooterLink>
              <FooterLink to="/">Агенство</FooterLink>
              <FooterLink to="/">Инфлюенсеры</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Свяжитесь с нами</FooterLinkTitle>
              <FooterLink to="/">Контакты</FooterLink>
              <FooterLink to="/">Помощь</FooterLink>
              <FooterLink to="/">Адресс</FooterLink>
              <FooterLink to="/">Спонсорство</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            {/* <SocialLogo to="/">Y</SocialLogo> */}
            <WebsiteRights>
              © {new Date().getFullYear()} ОАО "ЮСМ Банк"
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
              {/* <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                <FaYoutube />
              </SocialIconLink> */}
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
