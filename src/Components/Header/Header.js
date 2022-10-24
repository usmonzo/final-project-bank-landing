import React, { useState } from "react";
import {
  ArrowForward,
  ArrowRight,
  HeaderBg,
  HeaderButton,
  HeaderBtnWrapper,
  HeaderContainer,
  HeaderContent,
  HeaderH1,
  HeaderP,
  VideoBg,
} from "./HeaderElements";

import Video from "../videos/video.mp4";

function Header() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeaderContainer id="home">
      <HeaderBg>
        <VideoBg
          autoPlay
          playsInline
          loop
          muted
          srcmob={Video}
          src={Video}
          type="video/mp4"
        />
      </HeaderBg>
      <HeaderContent>
        <HeaderH1>Банкинг</HeaderH1>
        <HeaderP>
          Ещё проще и приятнее, чем вы себе представляли. Оформите карту сейчас
          и получите 10$ в подарок на ваш счёт.
        </HeaderP>
        <HeaderBtnWrapper>
          <HeaderButton to="card" onMouseEnter={onHover} onMouseLeave={onHover}>
            Открыть счёт {hover ? <ArrowForward /> : <ArrowRight />}
          </HeaderButton>
        </HeaderBtnWrapper>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
