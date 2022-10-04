import React, { useState } from "react";
import {
  ButtonBlack,
  ButtonRed,
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
  Stackk,
  Stackkk,
} from "./CardsElements";
import chip from "./images/chip.png";
import visa from "./images/visa.png";
import indicator from "./images/contactless-indicator.png";
import logo from "../images/logo.svg";

import { Button, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";

function Cards() {
  const [cardStyle, setCardStyle] = useState("black");
  const [data, setData] = useState({
    color: "",
    username: "",
    date: "",
    email: "",
    tel: "",
  });
  const [details, setdDetails] = useState({
    color: "",

    username: "",
    date: "",
    email: "",
    tel: "",
  });

  const Login = () => {
    // console.log(details);

    if (
      details.username === data.username &&
      details.date === data.date &&
      details.email === data.email &&
      details.tel === data.tel
    ) {
      console.log("Logged in !");
      setData({
        username: details.username,
        date: details.date,
        emeail: details.email,
        tel: details.tel,
      });
    } else {
      console.log("...");
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(details);
    Login(details);
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
    setCardStyle("darksalmon");
  };

  const changeToPurple = () => {
    setCardStyle("purple");
  };

  return (
    <CardsInfoContainer>
      <CardsInfoWrapper>
        <InfoForm>
          <HeadlineH1>
            Выберите как будет выглядеть именно ваша карта.
          </HeadlineH1>
          <Stackk shadow="xl" spacing={5} direction="row">
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
                  {details.username !== "" ? details.username : "Имя Фамилия"}
                </CardH5>
                <CardH6>
                  <CardSpan>expiry date</CardSpan>
                  <br />
                  22/27
                </CardH6>
                <CardVisa src={visa} alt="." />
              </Card>
            </Color>
            <Stackkk onSubmit={submitHandler}>
              <Btns>
                <ButtonBlack onClick={changeToBlack}></ButtonBlack>
                <ButtonBlue onClick={changeToBlue}></ButtonBlue>
                <ButtonGold onClick={changeToGold}></ButtonGold>
                <ButtonDark onClick={changeToDark}></ButtonDark>
                <ButtonBlueViolet
                  onClick={changeToBlueViolet}
                ></ButtonBlueViolet>
                <ButtonLawngreen onClick={changeToLawgreen}></ButtonLawngreen>
                <ButtonPurple onClick={changeToPurple}></ButtonPurple>
                <ButtonRed onClick={changeToRed}></ButtonRed>
                <ButtonGreen onClick={changeToGreen}></ButtonGreen>
              </Btns>

              <Input
                type="text"
                onChange={(e) =>
                  setdDetails({ ...details, username: e.target.value })
                }
                value={details.username}
                placeholder="Имя Фамилия"
                size="md"
                variant="outline"
                color="black"
                sx={{ textTransform: "capitalize" }}
                maxLength={20}
                required
              />
              <Input
                color="black"
                type="date"
                required
                onChange={(e) =>
                  setdDetails({ ...details, date: e.target.value })
                }
                value={details.date}
              />
              <Input
                variant="outline"
                placeholder="@email"
                color="black"
                onChange={(e) =>
                  setdDetails({ ...details, email: e.target.value })
                }
                value={details.email}
                required
              />
              <InputGroup>
                <InputLeftAddon color="black" children="+992" />
                <Input
                  name="tel"
                  type="tel"
                  placeholder="номер телефона"
                  maxLength={9}
                  color="black"
                  onChange={(e) =>
                    setdDetails({ ...details, tel: e.target.value })
                  }
                  value={details.tel}
                  required
                />
              </InputGroup>
              <Button type="submit" colorScheme="blue" sx={{ padding: "7px" }}>
                Оставить заявку
              </Button>
            </Stackkk>
          </Stackk>
        </InfoForm>
      </CardsInfoWrapper>
    </CardsInfoContainer>
  );
}

export default Cards;
