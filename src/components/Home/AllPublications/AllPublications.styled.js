import styled from "styled-components";

export const MainBox = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #f8f6f6;
  border-radius: 10px;
  padding: 10px;
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);

  position: relative;

  @media screen and (min-width: 360px) {
    padding: 20px;
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    padding: 50px;
    gap: 30px;
    justify-content: center;
  }
`;

export const TitleBox = styled.div`
  margin: 0 16px 20px;
  @media screen and (min-width: 1920px) {
    max-width: 1100px;
  }
`;

export const ImgBox = styled.div`
  width: 280px;

  margin: 0 auto 15px;
  @media screen and (min-width: 1200px) {
    width: 300px;
    flex-shrink: 0;
  }

  @media screen and (min-width: 1920px) {
    margin: 0;
  }

  @media screen and (min-width: 2560px) {
    min-width: 400px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 15px;
  color: #6e6d6d;
  font-size: 20px;
  text-align: center;

  @media screen and (min-width: 576px) {
    font-size: 32px;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
    font-size: 34px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 2560px) {
    font-size: 38px;
  }
`;

export const Description = styled.p`
  margin-bottom: 7px;
  font-weight: 500;
  color: #6b6363;

  text-indent: 40px;
  line-height: 1.6;
  font-size: 16px;

  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 20px;
  }
  @media screen and (min-width: 2560px) {
    font-size: 24px;
  }
`;
