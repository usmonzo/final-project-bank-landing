import React, { useState } from "react";

import {
  Form,
  Container,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
  IconLogo,
} from "./SignInElements";
import logo from "./logo.svg";
import { Heading } from "@chakra-ui/react";

function SignIn({ Login, error }) {
  const [details, setdDetails] = useState({ username: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(details);
    Login(details);
  };

  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form onSubmit={submitHandler}>
              <Icon to="/">
                <IconLogo src={logo} alt="logo" />
              </Icon>
              <FormH1>Войти в учетную запись :</FormH1>
              {error !== "" ? (
                <Heading
                  size="xs"
                  sx={{ color: "#F50537", paddingBottom: "15px" }}
                >
                  Неверный пароль или логин.
                </Heading>
              ) : (
                ""
              )}
              <FormLabel htmlFor="for">Логин </FormLabel>
              <FormInput
                type="text"
                name="username"
                id="username"
                onChange={(e) =>
                  setdDetails({ ...details, username: e.target.value })
                }
                value={details.username}
                requared
              />
              <FormLabel htmlFor="for">Пароль </FormLabel>
              <FormInput
                type="password"
                name="password"
                id="password"
                requared
                onChange={(e) =>
                  setdDetails({ ...details, password: e.target.value })
                }
                value={details.password}
              />
              <FormButton type="submit" value="Войти" />
              <Text>Забыл пароль</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}

export default SignIn;
