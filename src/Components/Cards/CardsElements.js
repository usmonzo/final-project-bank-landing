import styled from "styled-components";

export const Page = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f2f3f4;
  border: 1px solid #030303;
  margin: 0px auto 10px auto;
`;
export const ContentWrapper = styled.div`
  background: #fff;
  /* height: 900px; */
  max-width: 1400px;
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 20px auto 10px auto; */
`;
export const CardTitle = styled.h1`
  border: 2px solid red;
  font-size: 40px;
  font-weight: 400;
  padding: 20px;
`;

export const Content = styled.div`
  border: 2px solid black;
  padding: 20px;
`;

//                     //
//                     //
//                     //
//       BUTTONS       //
//                     //
//                     //
//                     //
export const ButtonsWrapper = styled.div`
  background: #f2f3f4;
  max-width: 400px;
  /* border: 2px solid black; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* gap: 10px; */
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-bottom: 50px;
`;

export const Btns = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: 1fr;
  gap: 15px;
`;

export const ButtonBlack = styled.button`
  border-radius: 1px;
  background: #010203;
  white-space: nowrap;
  width: 20px;
  height: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
`;

export const ButtonRed = styled.button`
  border-radius: 1px;
  background: red;
  white-space: nowrap;
  width: 20px;
  height: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
`;
export const ButtonBlue = styled.button`
  border-radius: 1px;
  background: blue;
  white-space: nowrap;
  width: 20px;
  height: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;
export const ButtonPurple = styled.button`
  border-radius: 1px;
  background: purple;
  white-space: nowrap;
  width: 20px;
  height: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;
export const ButtonPink = styled.button`
  border-radius: 1px;
  background: pink;
  white-space: nowrap;
  width: 20px;
  height: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;
export const ButtonGold = styled.button`
  border-radius: 1px;
  background: gold;
  white-space: nowrap;
  width: 20px;
  height: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;
export const ButtonDark = styled.button`
  border-radius: 1px;
  background: darkgoldenrod;
  white-space: nowrap;
  width: 20px;
  height: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;
export const ButtonBlueViolet = styled.button`
  border-radius: 1px;
  background: blueviolet;
  white-space: nowrap;
  width: 20px;
  height: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;
export const ButtonLawngreen = styled.button`
  border-radius: 1px;
  background: lawngreen;
  white-space: nowrap;
  width: 20px;
  height: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export const ButtonGreen = styled.button`
  border-radius: 1px;
  background: green;
  white-space: nowrap;
  width: 20px;
  height: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
`;

//                     //
//                     //
//                     //
//        CARD         //
//                     //
//                     //
//                     //
export const Color = styled.div`
  background-color: ${(props) => props.cardStyle};
  max-width: 505px;
  max-height: 320px;
  border-radius: 29px;
  margin: 10px auto 10px auto;
`;

export const Card = styled.div`
  width: 506px;
  height: 319px;
  /* position: relative; */
  background: radial-gradient(
    140% 140% at 0% 0%,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  border-top: 1px solid #eeeded70;
  border-left: 1px solid #eeeded70;
  border-radius: 30px;
  backdrop-filter: blur(30px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

export const CardH3 = styled.div`
  color: #ffffff;
  position: absolute;
  top: 30px;
  right: 30px;
`;
export const CardLogo = styled.img`
  width: 40px;
`;

export const CardiChip = styled.img`
  width: 50px;
  position: absolute;
  top: 70px;
  left: 40px;
`;

export const CardIndicator = styled.img`
  width: 50px;
  position: absolute;
  top: 70px;
  left: 100px;
`;

export const CardNumber = styled.h5`
  color: #ffffff;
  font-size: 36px;
  letter-spacing: 1px;
  word-spacing: 10px;
  font-family: "Economica", sans-serif;
  font-weight: 400;
  position: absolute;
  bottom: 100px;
  left: 30px;
`;

export const CardH5 = styled.h5`
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  position: absolute;
  bottom: 30px;
  left: 30px;
  text-transform: uppercase;
`;
export const CardH6 = styled.h6`
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  position: absolute;
  bottom: 30px;
  left: 235px;
  text-transform: uppercase;
`;

export const CardSpan = styled.span`
  font-size: 10px;
  /* font-family: "Mulish", sans-serif; */
  font-weight: 400;
`;

export const CardVisa = styled.img`
  width: 70px;
  position: absolute;
  right: 30px;
  bottom: 30px;
`;
//                     //
//                     //
//                     //
//        INFO         //
//                     //
//                     //
//                     //
export const CardsInfoContainer = styled.div`
  /* border-bottom: 1px solid black; */
  color: #fbfaf5;
  background: #f2f3f4;
  transition: 0.2s all ease-in-out;
  padding-top: 40px;

  @media screen and (max-width: 768px) {
    padding: 170px 0;
  }
`;

export const InfoForm = styled.div`
  border: 2px solid red;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
  }
`;
export const CardsInfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 800px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const HeadlineH1 = styled.h1`
  margin-top: 30px;
  justify-self: center;
  border-radius: 20px;
  padding: 30px 10px 20px 10px;
  background: #e4eefb;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  color: #010606;
  margin-bottom: 50px;
  /* margin-top: 0; */

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    text-align: center;
  }
`;
