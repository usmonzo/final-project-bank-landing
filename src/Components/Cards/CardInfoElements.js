import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-top: 20px;
  /* border-bottom: 1px solid black; */
  color: #fbfaf5;
  background: #f2f3f4;
  transition: 0.2s all ease-in-out;
  /* @media screen and (max-width: 900px) {
    margin-bottom: 300px;
  } */
`;

export const InfoWrapper = styled.div`
  display: flex;
  min-height: 800px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
export const SecondInfoRow = styled.div`
  /* padding-top: 20px; */
  display: flex;
  align-items: center;
  gap: 50px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;
export const SecondColumn1 = styled.div`
  margin-top: 0;
  padding: 20px 10px;
  grid-area: col1;

  @media screen and (max-width: 768px) {
    margin-top: 60px;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  display: flex;
`;
export const SecondColumn2 = styled.div`
  max-height: 600px;
  height: 100%;
  max-width: 450px;
  width: 100%;
  border-radius: 20px;
  background: #e4eefb;
  /* border: 1px solid black; */
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  margin-bottom: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 820px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    padding: 25px 15px 0 17px;
  }
  @media screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 10px 0 13px;
  }
  @media screen and (max-width: 630px) {
    padding: 20px 20px;
    margin: auto;
  }
  @media screen and (max-width: 500px) {
    padding: 20px 15px;
    margin: 0 auto;
  }
`;

export const TextWrapper = styled.div`
  max-width: 600px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    text-align: center;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;
export const FirstTextWrapper = styled.div`
  max-width: 540px;
  padding-top: 100px;
  padding-bottom: 60px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding-top: 20px;
    text-align: center;
    align-items: center;

    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const TopLine = styled.p`
  color: #2673e2;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.div`
  max-width: 400px;
  margin-bottom: 35px;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: #020202;
  padding: 0px 10px 0px 10px;

  /* @media screen and (max-width: 630px) {
    padding-bottom: 0px;
    margin-bottom: 0px;
  } */
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;
export const FirstSubtitle = styled.p`
  max-width: 400px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #020202;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

export const Img = styled.img`
  transform: rotate(-30deg);
  width: 60%;
  margin: 0px 0px 10px 0px;
  padding-right: 0px;
  margin-top: 20px;
  border-radius: 40px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  @media screen and (max-width: 600px) {
    border-radius: 30px;
  }
  @media screen and (max-width: 500px) {
    border-radius: 25px;
    margin-top: 10px;
  }
  @media screen and (max-width: 400px) {
    border-radius: 20px;
  }
`;
