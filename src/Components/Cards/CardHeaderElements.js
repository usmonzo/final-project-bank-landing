import styled from "styled-components";

import { Link as LinkRouter } from "react-router-dom";

export const HeaderContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
  height: 800px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 975px) {
    height: 1000px;
  }

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeaderBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232e34;
`;

export const HeaderContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 9px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background-color: rgba(0, 0, 0, 0.4); */
  /* border-radius: 50px; */

  @media screen and (max-width: 975px) {
    flex-direction: column;
  }
`;

export const HeaderH1 = styled.h1`
  color: #fbfaf5;
  font-size: 50px;
  font-weight: 700;
  text-align: left;

  @media screen and (max-width: 975px) {
    padding-top: 100px;
    font-size: 45px;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeaderP = styled.p`
  margin-top: 20px;
  color: #fbfaf5;
  font-size: 24px;
  text-align: left;
  max-width: 600px;

  @media screen and (max-width: 900px) {
    font-size: 20px;
    /* padding-bottom: 10px; */
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeaderText = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    justify-content: center;
    align-items: center;
  }
`;

export const HeaderImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Img = styled.img`
  width: 90%;

  @media screen and (max-width: 800px) {
    padding-top: 100px;
    width: 80%;
  }
`;
export const ImgB = styled.img`
  width: 90%;
  padding-top: 20px;

  @media screen and (max-width: 800px) {
    width: 80%;
    padding-top: 20px;
  }
`;

export const HeaderBtnWrapper = styled.div`
  /* margin-top: 32px; */
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HeaderButton = styled(LinkRouter)`
  width: 200px;
  max-height: 60px;
  height: 100%;

  @media screen and (max-width: 800px) {
    gap: 8px;
  }
`;
