import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: #050505;
`;

export const FooterWrap = styled.div`
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  max-width: 1200px;
  max-height: 500px;
  margin: 0 auto;
  @media screen and (max-width: 820px) {
    max-height: 600px;
    padding-top: 50px;
    padding-bottom: 55px;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  text-align: left;
  width: 200px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 820px) {
    padding: 20px;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
  }
  @media screen and (max-width: 420px) {
    padding: 20px;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 17px;
  margin-bottom: 16px;
  font-weight: 600;
  padding-bottom: 4px;
  border-bottom: 2px solid #2673e2;
  border-radius: 2px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  text-align: left;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #2673e2;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  /* gap: 40px; */
  align-items: center;
  width: 200px;
  @media screen and (max-width: 400px) {
    padding-bottom: 20px;
  }
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  &:hover {
    color: #7cabed;
    transition: 0.2s ease-in-out;
  }
`;
