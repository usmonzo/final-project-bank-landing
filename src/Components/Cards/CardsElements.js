import styled from "styled-components";

export const ContentWrapper = styled.div`
  background: #fff;
  /* height: 900px; */
  max-width: 1400px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 20px auto 10px auto; */
`;
export const CardTitle = styled.h1`
  font-size: 40px;
  font-weight: 400;
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

  display: flex;
  flex-direction: row;
  justify-content: center;
  /* gap: 10px; */
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin-bottom: 50px;
`;

export const Btns = styled.div`
  padding: 5px 20px;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: 1fr;
  gap: 15px;
`;

export const ButtonBlack = styled.button`
  border-radius: 5px;
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
  border-radius: 5px;
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
  border-radius: 5px;
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
  border-radius: 5px;
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
  border-radius: 5px;
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
  border-radius: 5px;
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
  border-radius: 5px;
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
  border-radius: 5px;
  background: blueviolet;
  white-space: nowrap;
  width: 20px;
  height: 20px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;
export const ButtonLawngreen = styled.button`
  border-radius: 5px;
  background: darksalmon;
  white-space: nowrap;
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export const ButtonGreen = styled.button`
  border-radius: 5px;
  background: green;
  white-space: nowrap;
  width: 20px;
  height: 20px;
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
  border: none;
  border-radius: 31px;
  margin: 10px auto 10px auto;
  @media screen and (max-width: 630px) {
    max-width: 405px;
    max-height: 249px;
    border-radius: 29px;
  }
  @media screen and (max-width: 550px) {
    max-width: 395px;
    max-height: 239px;
    border-radius: 29px;
  }
  @media screen and (max-width: 500px) {
    max-width: 365px;
    max-height: 229px;
    border-radius: 29px;
  }
  @media screen and (max-width: 450px) {
    max-width: 360px;
    max-height: 215px;
    border-radius: 29px;
  }
  @media screen and (max-width: 420px) {
    max-width: 340px;
    max-height: 195px;
    border-radius: 29px;
  }
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
  @media screen and (max-width: 630px) {
    max-width: 405px;
    max-height: 245px;
  }
  @media screen and (max-width: 550px) {
    max-width: 395px;
    max-height: 239px;
  }
  @media screen and (max-width: 500px) {
    max-width: 365px;
    max-height: 229px;
  }
  @media screen and (max-width: 450px) {
    max-width: 360px;
    max-height: 210px;
  }
  @media screen and (max-width: 420px) {
    max-width: 340px;
    max-height: 195px;
  }
`;

export const CardH3 = styled.div`
  color: #ffffff;
  position: absolute;
  top: 30px;
  right: 30px;
  @media screen and (max-width: 630px) {
    top: 23px;
  }
`;
export const CardLogo = styled.img`
  width: 43px;
  @media screen and (max-width: 630px) {
    width: 20px;
  }
  @media screen and (max-width: 420px) {
    width: 17px;
  }
`;

export const CardiChip = styled.img`
  width: 50px;
  position: absolute;
  top: 70px;
  left: 40px;
  @media screen and (max-width: 630px) {
    width: 30px;
    top: 55px;
    left: 40px;
  }
  @media screen and (max-width: 450px) {
    width: 25px;
    top: 53px;
    left: 40px;
  }
  @media screen and (max-width: 420px) {
    width: 25px;
    top: 38px;
    left: 40px;
  }
`;

export const CardIndicator = styled.img`
  width: 50px;
  position: absolute;
  top: 70px;
  left: 100px;
  @media screen and (max-width: 630px) {
    width: 27px;
    top: 56px;
    left: 75px;
  }
  @media screen and (max-width: 450px) {
    width: 20px;
    top: 55px;
    left: 70px;
  }
  @media screen and (max-width: 420px) {
    width: 20px;
    top: 40px;
    left: 70px;
  }
`;

export const CardNumber = styled.h5`
  color: #ffffff;
  font-size: 34px;
  letter-spacing: 1px;
  word-spacing: 10px;
  font-family: "Economica", sans-serif;
  font-weight: 400;
  position: absolute;
  bottom: 100px;
  left: 30px;
  @media screen and (max-width: 630px) {
    font-size: 23px;
    bottom: 90px;
    left: 35px;
  }
  @media screen and (max-width: 550px) {
    font-size: 20px;
    bottom: 90px;
    left: 33px;
  }
  @media screen and (max-width: 450px) {
    font-size: 18px;
    bottom: 70px;
    left: 33px;
  }
`;

export const CardH5 = styled.h5`
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  position: absolute;
  bottom: 30px;
  left: 30px;
  text-transform: uppercase;
  @media screen and (max-width: 630px) {
    font-size: 11px;
    left: 32px;
  }
  @media screen and (max-width: 550px) {
    font-size: 10px;
    left: 32px;
  }
  @media screen and (max-width: 450px) {
    font-size: 9px;
    left: 32px;
  }
`;
export const CardH6 = styled.h6`
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  position: absolute;
  bottom: 30px;
  left: 235px;
  text-transform: uppercase;
  @media screen and (max-width: 630px) {
    font-size: 11px;
  }
  @media screen and (max-width: 550px) {
    font-size: 10px;
    left: 220px;
  }
  @media screen and (max-width: 450px) {
    font-size: 9px;
    left: 205px;
  }
`;

export const CardSpan = styled.span`
  font-size: 10px;
  /* font-family: "Mulish", sans-serif; */
  font-weight: 400;
  @media screen and (max-width: 550px) {
    font-size: 9px;
  }
  @media screen and (max-width: 450px) {
    font-size: 8px;
  }
`;

export const CardVisa = styled.img`
  width: 70px;
  position: absolute;
  right: 30px;
  bottom: 30px;
  @media screen and (max-width: 630px) {
    width: 45px;
  }
  @media screen and (max-width: 450px) {
    width: 40px;
  }
`;
//                     //
//                     //
//                     //
//        INFO         //
//                     //
//                     //
//                     //
export const CardsInfoContainer = styled.div`
  color: #fbfaf5;
  background: #f2f3f4;
  transition: 0.2s all ease-in-out;
  padding: 50px 0;

  @media screen and (max-width: 768px) {
    padding: 170px 0;
  }
  @media screen and (max-width: 550px) {
    padding: 220px 0;
  }
  @media screen and (max-width: 480px) {
    padding: 70px 0;
  }
  @media screen and (max-width: 430px) {
    padding: 100px 0;
  }
  @media screen and (max-width: 409px) {
    padding: 150px 0;
  }
  @media screen and (max-width: 400px) {
    padding: 200px 0;
  }
  @media screen and (max-width: 379px) {
    padding: 300px 0;
  }
  @media screen and (max-width: 365px) {
    padding: 400px 0;
  }
`;

export const InfoForm = styled.div`
  padding: 50px;
  margin: 50px;
  border-radius: 15px;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 768px) {
    margin-top: 200px;
  }
  @media screen and (max-width: 630px) {
    padding: 40px;
  }
  @media screen and (max-width: 550px) {
    padding: 30px;
  }
  @media screen and (max-width: 500px) {
    padding: 23px;
  }
  @media screen and (max-width: 450px) {
    padding: 20px;
  }
`;
export const CardsInfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  max-height: 1300px;
  width: 100%;
  max-width: 1100px;
  margin-top: 300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 630px) {
    margin-top: 0px;
  }
  @media screen and (max-width: 531px) {
    margin-top: 100px;
  }
  @media screen and (max-width: 480px) {
    margin-top: 30px;
  }
  /* @media screen and (max-width: 630px) {
    padding: 40px;
  }
  @media screen and (max-width: 550px) {
    padding: 30px;
  }
  @media screen and (max-width: 500px) {
    padding: 23px;
  }
  @media screen and (max-width: 450px) {
    padding: 20px;
  } */
`;

export const HeadlineH1 = styled.h1`
  margin-top: 10px;
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

  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
    text-align: center;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 620px) {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 550px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 420px) {
    font-size: 1.4rem;
    padding: 20px 7px 13px 7px;
  }
`;
//                     //
//                     //
//                     //
//        BOX          //
//                     //
//                     //
//                     //

export const Stackk = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
  }
`;
export const Stackkk = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  margin-left: 40px;
  @media screen and (max-width: 768px) {
    padding-top: 20px;
    margin-left: 0;
  }
  @media screen and (max-width: 600px) {
    padding: 25px 0 15px 0;
    margin: 0 auto;
  }
  @media screen and (max-width: 420px) {
    padding: 25px 0px 15px 0px;
    margin: 0 auto;
  }
`;
