import styled from "styled-components";

import { Link as LinkRouter } from "react-router-dom";

export const HeaderContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  height: 100vh;
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
  overflow: hidden;
`;

export const HeaderContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: relative;
  padding: 9px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background-color: rgba(0, 0, 0, 0.4); */
  /* border-radius: 50px; */

  @media screen and (max-width: 975px) {
    flex-direction: column;
  }
  @media screen and (max-width: 450px) {
    padding: 0;
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
  @media screen and (max-width: 400px) {
    font-size: 28px;
  }
`;

export const HeaderP = styled.p`
  padding: 10px 0px;
  margin-top: 20px;
  color: #fbfaf5;
  font-size: 24px;
  text-align: left;
  max-width: 600px;
  width: 100%;

  @media screen and (max-width: 900px) {
    font-size: 20px;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
  @media screen and (max-width: 430px) {
    font-size: 13px;
  }
  @media screen and (max-width: 400px) {
    font-size: 12px;
    width: 378px;
  }
`;

export const HeaderText = styled.div`
  /* margin: 10px; */
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
  position: relative;
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
`;
export const Img = styled.img`
  width: 50%;

  @media screen and (max-width: 975px) {
    width: 70%;
    padding-top: 10px;
  }
`;
export const ImgB = styled.img`
  width: 100%;
  padding: 5px;
  margin-top: 10px;

  /* @media screen and (max-width: 800px) {
    width: 80%;
    padding-top: 20px;
  } */
`;

export const HeaderBtnWrapper = styled.div`
  /* margin-top: 32px; */
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
`;

export const HeaderButton = styled(LinkRouter)`
  max-width: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    gap: 8px;
  }
  @media screen and (max-width: 470px) {
    gap: 0px;
  }
`;
