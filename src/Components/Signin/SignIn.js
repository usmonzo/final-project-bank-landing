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
          <Icon to="/">
            <IconLogo src={logo} alt="logo" />
          </Icon>
          <FormContent>
            <Form onSubmit={submitHandler}>
              <FormH1>Войти в учетную запись :</FormH1>
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
            {/* <form onSubmit={submitHandler}>
              <h1>Войти в учетную запись :</h1>
              <label htmlFor="name">Логин :</label>
              <input type="text" name="username" id="username" />
              <label htmlFor="password">Пароль :</label>
              <input type="password" name="password" id="password" />
              <input type="submit" value="submit" />
            </form> */}
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
}

export default SignIn;
