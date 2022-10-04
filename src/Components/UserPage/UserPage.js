import React from "react";
import styled from "styled-components";
import Expenses from "../Expenses/Expenses";
// import image from "../images/logo.svg";
import Sidebar from "../Sidebar/Sidebar";
import "./UserPage.css";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  /* background: #335680; */
  background: linear-gradient(to right, #000046, #1cb5e0);
`;

function UserPage({ Logout }) {
  return (
    <Container>
      <Sidebar Logout={Logout} />
      <Expenses />
    </Container>
  );
}

export default UserPage;
