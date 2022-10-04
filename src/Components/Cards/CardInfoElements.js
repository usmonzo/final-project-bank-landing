import styled from "styled-components";

export const InfoContainer = styled.div`
  /* border-bottom: 1px solid black; */
  color: #fbfaf5;
  background: #f2f3f4;
  transition: 0.2s all ease-in-out;

  @media screen and (max-width: 768px) {
    padding: 130px 0;
  }
`;

export const InfoWrapper = styled.div`
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

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"col2 col1"` : `"col1 col2"`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `"col1" "col2"` : `"col1 col1" "col2 col2"`};
  }
`;
export const SecondInfoRow = styled.div`
  /* padding-top: 20px; */
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  gap: 50px;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"col1 col2"` : `"col1 col2"`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `"col1 col1" "col2 col2"` : `"col1" "col2"`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const SecondColumn1 = styled.div`
  margin-top: 0;
  padding: 20px 10px;
  grid-area: col1;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;
export const SecondColumn2 = styled.div`
  border-radius: 20px;
  /* background: #fff8dc; */
  background: #e4eefb;
  /* border: 1px solid black; */
  box-shadow: rgb(38, 57, 77) 8px 20px 35px -5px;
  margin-bottom: 15px;
  padding: 20px 10px 0 30px;
  grid-area: col2;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px 15px 0 17px;
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
`;
