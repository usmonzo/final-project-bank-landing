import React from "react";

import {
  Column1,
  Column2,
  FirstSubtitle,
  FirstTextWrapper,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  SecondColumn1,
  SecondColumn2,
  SecondInfoRow,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./CardInfoElements";
import card from "./images/card.png";
import { BsCashStack, BsCashCoin } from "react-icons/bs";
import { BiTransfer } from "react-icons/bi";
import { BsCurrencyExchange } from "react-icons/bs";
import { TbCashOff } from "react-icons/tb";

const CardsInfoSection = () => {
  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <FirstTextWrapper>
                <TopLine>Карты USM</TopLine>
                <Heading>
                  Одинаково выгодные условия для всех держателей карт от нашего
                  банка.
                </Heading>
                <FirstSubtitle>
                  Тоесть никаких "Gold", "Platinum" или "Infinite". Одна карта
                  на все случаи жизни.
                </FirstSubtitle>
              </FirstTextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={card} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
      <InfoContainer>
        <InfoWrapper>
          <SecondInfoRow>
            <SecondColumn1>
              <TextWrapper>
                <TopLine>Приоритет</TopLine>
                <Heading>
                  То что другие банки называют "особыми условиями", мы называем:{" "}
                  <span style={{ borderBottom: "3px solid #2673e2" }}>
                    условием для всех
                  </span>
                  .
                </Heading>
              </TextWrapper>
            </SecondColumn1>
            <SecondColumn2>
              <Subtitle style={{ paddingTop: "10px" }}>
                <BsCashStack style={{ width: "30px", padding: "0" }} /> Снятие
                наличных из любой точки мира без{" "}
                <span style={{ color: "#2673e2" }}>%</span>.
              </Subtitle>
              <Subtitle>
                <BiTransfer style={{ width: "30px", padding: "0" }} /> Самые
                быстрые переводы с карты на карту, не теряй ни секунды.
              </Subtitle>
              <Subtitle>
                <BsCurrencyExchange style={{ width: "30px", padding: "0" }} />
                <span style={{ color: "#2673e2" }}>Мультивалютность:</span>{" "}
                храните деньги в любой выбранной вами валюте.
              </Subtitle>
              <Subtitle>
                <TbCashOff style={{ width: "30px", padding: "0" }} />
                Оформление, первый год обслуживания и доставка в любую точку
                мира – абсолютно бесплатно.
              </Subtitle>
              <Subtitle>
                <BsCashCoin style={{ width: "30px", padding: "0" }} />
                Повышенный кешбэк, по{" "}
                <span
                  style={{
                    fontWeight: "500",
                    color: "#2673e2",
                    cursor: "pointer",
                  }}
                >
                  партнерской программе
                </span>
                .
              </Subtitle>
              <Subtitle
                style={{
                  textAlign: "center",
                  fontSize: "24px",
                  borderBottom: "1px solid red",
                  borderRadius: "2px",
                }}
              >
                <span style={{ fontSize: "30px", color: "#2673e2" }}>1%</span> –
                кешбэк на всё.
              </Subtitle>
            </SecondColumn2>
          </SecondInfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default CardsInfoSection;
