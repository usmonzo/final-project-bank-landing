import React from "react";
import {
  CloseIcon,
  Icon,
  TopbarBtnWrap,
  TopbarContainer,
  TopbarLink,
  TopbarMenu,
  TopbarRoute,
  TopbarWrapper,
} from "./TopbarElements";

function Topbar({ isOpen, toggle }) {
  return (
    <TopbarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <TopbarWrapper>
        <TopbarMenu>
          <TopbarLink to="about" onClick={toggle}>
            Транзакции
          </TopbarLink>
          <TopbarLink to="discover" onClick={toggle}>
            Учётная запись
          </TopbarLink>
          <TopbarLink to="services" onClick={toggle}>
            Преимущества
          </TopbarLink>
          <TopbarLink to="signup" onClick={toggle}>
            Открыть счёт
          </TopbarLink>
        </TopbarMenu>
        <TopbarBtnWrap>
          <TopbarRoute to="/signin" onClick={toggle}>
            Войти
          </TopbarRoute>
        </TopbarBtnWrap>
      </TopbarWrapper>
    </TopbarContainer>
  );
}

export default Topbar;
