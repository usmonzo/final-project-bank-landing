import React from "react";
import {
  HeaderBg,
  HeaderBtnWrapper,
  HeaderButton,
  HeaderContainer,
  HeaderContent,
  HeaderH1,
  HeaderP,
  HeaderText,
  Img,
  ImgB,
  VideoBg,
} from "./CardHeaderElements";
import mobile1 from "./images/mobiles.svg";
import ggl from "./images/gglplay.svg";
import appstr from "./images/appstore.svg";
import Video from "./video2.mp4";

function CardHeader() {
  return (
    <HeaderContainer id="home">
      <HeaderBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeaderBg>
      <HeaderContent>
        {/* <HeaderImg> */}
        <Img src={mobile1} />
        {/* </HeaderImg> */}
        <HeaderText>
          <HeaderH1>Иновационный банкинг</HeaderH1>
          <HeaderP>
            Мы убрали привычные понятия о картах, совершили революцию в мире
            банковских карт.
          </HeaderP>
          <HeaderBtnWrapper>
            <HeaderButton>
              <ImgB src={ggl} />
            </HeaderButton>
            <HeaderButton>
              <ImgB src={appstr} />
            </HeaderButton>
          </HeaderBtnWrapper>
        </HeaderText>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default CardHeader;
