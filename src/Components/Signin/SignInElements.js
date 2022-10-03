import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  /* text-decoration: none; */
  /* color: #fff; */
  /* font-weight: 700; */
  /* font-size: 32px; */
  max-width: 100px;
  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const IconLogo = styled.img`
  width: 50px;
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  /* background: #010101; */
  background: rgba(0, 0, 0, 0.84);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.4px);
  -webkit-backdrop-filter: blur(3.4px);
  border: 1px solid rgba(0, 0, 0, 0.3);
  max-width: 500px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  /* grid-template-columns: 1fr; */
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 23px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  background: rgba(255, 255, 255, 0.64);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.4px);
  -webkit-backdrop-filter: blur(3.4px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 15px 15px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  font-size: 18px;

  &:focus {
    background: #f2f3f4;
  }
`;

export const FormButton = styled.input`
  background: #2673e2;
  /* background: #002f46; */
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 19px;
  font-weight: 300;
  cursor: pointer;
  display: flex;
  text-decoration: none;
  justify-content: center;
`;

export const Text = styled.span`
  justify-self: center;
  max-width: 300px;
  text-align: center;
  margin-top: 24px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;
