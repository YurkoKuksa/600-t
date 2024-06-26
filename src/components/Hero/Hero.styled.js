import styled from "styled-components";

import chemistry from "../../assets/images/chemistry76.png";

export const StyledBox = styled.div`
  padding: 75px 0;
  margin-bottom: 5px;

  border-radius: 10px;
  border: 1px solid cornflowerblue;
  background-color: #f8f6f6;
  background-image: url(${chemistry});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left 0 top 50%;

  position: relative;

  height: calc(100vh - 61.8px);
  flex: 1;

  @media screen and (min-width: 360px) and (max-height: 574.98px) {
    padding: 100px 0;
  }

  @media screen and (min-width: 360px) and (min-height: 575px) {
    padding: 180px 0;
  }

  @media screen and (min-width: 384px) and (max-height: 629.98px) {
    padding: 35px 0;
  }

  @media screen and (min-width: 384px) and (min-height: 630px) and (max-height: 685.98px) {
    padding: 65px 0;
  }

  @media screen and (min-width: 384px) and (min-height: 686px) {
    padding: 115px 0;
  }

  @media screen and (min-width: 412px) and (max-height: 649.98px) {
    padding: 30px 0;
  }

  @media screen and (min-width: 412px) and (min-height: 650px) and (max-height: 709.98px) {
    padding: 60px 0;
  }

  @media screen and (min-width: 412px) and (min-height: 710px) {
    padding: 110px 0;
  }

  @media screen and (min-width: 576px) and (max-height: 649.98px) {
    padding: 30px 0;
  }

  @media screen and (min-width: 576px) and (min-height: 650px) and (max-height: 709.98px) {
    padding: 140px 0;
  }

  @media screen and (min-width: 576px) and (min-height: 710px) {
    padding: 180px 0;
  }

  @media screen and (min-width: 992px) and (min-height: 710px) {
    padding: 200px 0;
  }

  @media screen and (min-width: 1200px) and (max-height: 429.98px) {
    padding: 30px 0;
  }

  @media screen and (min-width: 1200px) and (min-height: 430px) and (max-height: 499.98px) {
    padding: 45px 0;
  }

  @media screen and (min-width: 1200px) and (min-height: 500px) and (max-height: 596.98px) {
    padding: 100px 0;
  }

  @media screen and (min-width: 1200px) and (min-height: 597px) and (max-height: 629.98px) {
    padding: 140px 0;
  }

  @media screen and (min-width: 1200px) and (min-height: 630px) and (max-height: 699.98px) {
    padding: 180px 0;
  }

  @media screen and (min-width: 1200px) and (min-height: 700px) and (max-height: 789.98px) {
    padding: 220px 0;
  }

  @media screen and (min-width: 1200px) and (min-height: 790px) and (max-height: 853.98px) {
    padding: 250px 0;
  }

  @media screen and (min-width: 1200px) and (min-height: 854px) {
    padding: 290px 0;
  }

  @media screen and (min-width: 1792px) and (min-height: 900px) {
    padding: 300px 0;
  }

  @media screen and (min-width: 2560px) and (min-height: 1000px) {
    padding: 350px 0 0;
  }
`;

export const MainTitle = styled.h1`
  font-size: 50px;
  text-transform: capitalize;
  text-align: center;
  color: #1c1d27;
  background-color: rgb(142, 143, 153, 0.5);
  @media screen and (min-width: 384px) {
    font-size: 80px;
  }

  @media screen and (min-width: 412px) {
    font-size: 85px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 95px;
  }

  @media screen and (min-width: 1792px) {
    font-size: 140px;
  }

  @media screen and (min-width: 2560px) {
    font-size: 180px;
  }
`;

export const ListWrapper = styled.ul`
  gap: 5px;
  left: 50%;
  bottom: 5%;
  display: flex;
  position: absolute;
  flex-direction: column;
  transform: translateX(-50%);

  @media screen and (min-width: 360px) {
    bottom: calc(5% + 50px);
  }

  @media screen and (min-width: 992px) {
    bottom: 25%;
  }

  @media screen and (min-width: 1200px) {
    bottom: 15%;
  }

  @media screen and (min-width: 1440px) {
    bottom: 10%;
  }
  @media screen and (min-width: 1600px) {
    bottom: 30%;
  }

  @media screen and (min-width: 1792px) {
    bottom: 20%;
  }

  @media screen and (min-width: 1920px) {
    gap: 8px;
    bottom: 18%;
  }

  @media screen and (min-width: 2560px) {
    bottom: 12%;
  }
`;

export const InfoBtn = styled.button`
  width: 155px;
  padding: 10px 5px;
  font-size: 14px;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  color: #e7e9fc;
  border: 1px solid #fff;
  background-color: #0a2161;
  color: #fff;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.3s;
  box-shadow: ${({ theme }) =>
    `${theme.shadows.button}, ${theme.shadows.inner}`};

  &:hover {
    background-color: #1f4fd1;
  }
  &:active {
    background-color: #406ce3;
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }

  @media screen and (min-width: 412px) {
    padding: 10px 8px;
  }

  @media screen and (min-width: 576px) {
    font-size: 16px;
    width: 165px;
  }

  @media screen and (min-width: 1200px) {
    width: 165px;
    padding: 10px 8px;
    font-size: 16px;
  }

  @media screen and (min-width: 1792px) {
    width: 200px;
    padding: 17px 10px;
    font-size: 18px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 22px;
    width: 230px;
    padding: 22px 10px;
  }

  @media screen and (min-width: 2560px) {
    font-size: 26px;
    width: 280px;
    padding: 25px 10px;
  }
`;

export const InfoBtnMain = styled.button`
  width: 155px;
  padding: 15px 5px;
  font-size: 14px;
  border-radius: 8px;

  opacity: 0.9;
  color: #e7e9fc;
  border: 1px solid #fff;
  background-color: #0a2161;
  color: #fff;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.3s;
  box-shadow: ${({ theme }) =>
    `${theme.shadows.button}, ${theme.shadows.inner}`};

  &:hover {
    background-color: #1f4fd1;
  }

  &:active {
    background-color: #406ce3;
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }

  @media screen and (min-width: 412px) {
    padding: 18px 15px;
  }

  @media screen and (min-width: 576px) {
    font-size: 16px;
    width: 165px;
  }

  @media screen and (min-width: 1792px) {
    width: 200px;
    padding: 24px 15px;
    border-radius: 8px;
    font-size: 18px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 22px;
    width: 230px;
    padding: 30px 15px;
  }

  @media screen and (min-width: 2560px) {
    font-size: 26px;
    width: 280px;
    padding: 34px 15px;
  }
`;

export const Flask = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50px;

  @media screen and (max-width: 359px) {
    display: none;
  }

  @media screen and (min-width: 360px) {
    bottom: 50px;
    width: 70px;
  }

  @media screen and (min-width: 412px) {
    width: 90px;
  }

  @media screen and (min-width: 992px) {
    bottom: 0;
  }

  @media screen and (min-width: 1200px) {
    width: 110px;
  }

  @media screen and (min-width: 1440px) {
    width: 110px;
  }

  @media screen and (min-width: 2560px) {
    width: 210px;
  }
`;

export const MainWrapper = styled.div``;
