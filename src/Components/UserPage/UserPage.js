import React from "react";
import styled from "styled-components";
import Expenses from "../Expenses/Expenses";
// import image from "../images/logo.svg";
import Sidebar from "../Sidebar/Sidebar";
import "./UserPage.scss";

export const Container = styled.div`
  min-height: 845px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: #335680; */
  background: linear-gradient(to right, #000046, #1cb5e0);
`;

function UserPage({ Logout }) {
  return (
    <Container>
      <Sidebar Logout={Logout} />
      <Expenses Logout={Logout} />
    </Container>
  );
}

export default UserPage;
