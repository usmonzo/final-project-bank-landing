import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f2f3f4;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 30px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  max-height: 400px;
  min-height: 350px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 150px;
  width: 150px;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    height: 200px;
    width: 200px;
    padding-bottom: 5px;
  }
`;

export const ServicesH1 = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  color: #010606;
  margin-bottom: 50px;
  /* margin-top: 0; */

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1.2rem;
  color: #000;
  padding-bottom: 8px;
  @media screen and (max-width: 768px) {
    padding-bottom: 20px;
  }
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  padding: 0;
  @media screen and (max-width: 768px) {
    padding: 0 30px;
  }
`;
