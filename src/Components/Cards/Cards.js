import React, { useState } from "react";
import {
  ButtonBlack,
  ButtonRed,
  ButtonsWrapper,
  Card,
  CardH3,
  CardH5,
  CardH6,
  CardiChip,
  CardIndicator,
  CardNumber,
  CardSpan,
  CardVisa,
  Color,
  CardLogo,
  ButtonGreen,
  ButtonBlue,
  Btns,
  ButtonGold,
  ButtonDark,
  ButtonBlueViolet,
  ButtonLawngreen,
  ButtonPurple,
  InfoForm,
  HeadlineH1,
  CardsInfoWrapper,
  CardsInfoContainer,
} from "./CardsElements";
import chip from "./images/chip.png";
import visa from "./images/visa.png";
import indicator from "./images/contactless-indicator.png";
import logo from "../images/logo.svg";
import { FormGroup, FormLabel } from "@mui/material";

function Cards() {
  const [newName, setNewName] = useState("Ваши инициалы");
  const [cardStyle, setCardStyle] = useState("black");

  const changeName = (event) => {
    if (event.target.value === "") {
      setNewName("Ваши инициалы");
    } else {
      setNewName(event.target.value);
    }
  };

  const changeToBlue = () => {
    setCardStyle("blue");
  };
  const changeToRed = () => {
    setCardStyle("red");
  };
  const changeToBlack = () => {
    setCardStyle("black");
  };
  const changeToGreen = () => {
    setCardStyle("green");
  };
  const changeToGold = () => {
    setCardStyle("gold");
  };
  const changeToDark = () => {
    setCardStyle("darkgoldenrod");
  };

  const changeToBlueViolet = () => {
    setCardStyle("blueviolet");
  };

  const changeToLawgreen = () => {
    setCardStyle("lawngreen");
  };

  const changeToPurple = () => {
    setCardStyle("purple");
  };

  return (
    <CardsInfoContainer>
      <CardsInfoWrapper>
        <HeadlineH1>Выберите как будет выглядеть именно ваша карта.</HeadlineH1>
        <InfoForm>
          <ButtonsWrapper>
            <Btns>
              <ButtonBlack onClick={changeToBlack}></ButtonBlack>
              <ButtonBlue onClick={changeToBlue}></ButtonBlue>
              <ButtonGold onClick={changeToGold}></ButtonGold>
              <ButtonDark onClick={changeToDark}></ButtonDark>
              <ButtonBlueViolet onClick={changeToBlueViolet}></ButtonBlueViolet>
              <ButtonLawngreen onClick={changeToLawgreen}></ButtonLawngreen>
              <ButtonPurple onClick={changeToPurple}></ButtonPurple>
              <ButtonRed onClick={changeToRed}></ButtonRed>
              <ButtonGreen onClick={changeToGreen}></ButtonGreen>
            </Btns>
          </ButtonsWrapper>
          <Color cardStyle={cardStyle}>
            <Card>
              <CardH3>
                <CardLogo src={logo} />
              </CardH3>
              <CardiChip src={chip} alt="." />
              <CardIndicator src={indicator} alt="." />
              <CardNumber>1998 0922 2211 2211</CardNumber>
              <CardH5>
                <CardSpan>card holder</CardSpan>
                <br />
                {newName}
              </CardH5>
              <CardH6>
                <CardSpan>expiry date</CardSpan>
                <br />
                22/27
              </CardH6>
              <CardVisa src={visa} alt="." />
            </Card>
          </Color>
          <FormGroup sx={{ marginTop: "30px" }}>
            <FormLabel>Введите ваше имя:</FormLabel>
            <input
              type="text"
              onAnimationEnd={newName}
              onChange={changeName}
              placeholder={newName}
              required
            />
          </FormGroup>
        </InfoForm>
      </CardsInfoWrapper>
    </CardsInfoContainer>
  );
}

export default Cards;
