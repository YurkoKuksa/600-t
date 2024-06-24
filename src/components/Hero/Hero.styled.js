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

  @media screen and (min-width: 360px) and (max-height: 629.98px) {
    padding: 140px 0;
  }

  @media screen and (min-width: 360px) and (min-height: 630px) {
    padding: 180px 0;
  }

  @media screen and (min-width: 375px) and (max-height: 549.98px) {
    padding: 150px 0;
  }

  @media screen and (min-width: 375px) and (min-height: 550px) {
    padding: 180px 0;
  }

  @media screen and (min-width: 412px) {
    padding: 140px 0;
  }

  @media screen and (min-width: 576px) {
    padding: 180px 0;
  }

  @media screen and (min-width: 992px) {
    /* padding: 200px 0; */
  }

  @media screen and (min-width: 1200px) {
    padding: 200px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 290px 0;
  }

  @media screen and (min-width: 1792px) {
    padding: 300px 0;
  }

  @media screen and (min-width: 2560px) {
    padding: 350px 0;
  }
`;

export const MainTitle = styled.h1`
  /* margin-bottom: 145px; */
  font-size: 50px;

  text-transform: capitalize;
  text-align: center;
  color: #1c1d27;
  background-color: rgb(142, 143, 153, 0.5);

  @media screen and (min-width: 360px) {
    /* margin-bottom: 175px; */
  }

  // для galaxy s22
  @media screen and (min-width: 360px) and (min-height: 630px) {
    /* margin-bottom: 110px; */
  }

  @media screen and (min-width: 375px) {
    /* margin-bottom: 70px; */
  }

  @media screen and (min-width: 384px) {
    font-size: 80px;
    /* margin-bottom: 55px; */
  }

  @media screen and (min-width: 412px) {
    font-size: 85px;
    /* margin-bottom: 120px; */
  }

  @media screen and (min-width: 430px) {
    /* font-size: 90px; */
  }

  @media screen and (min-width: 576px) {
    /* font-size: 120px; */
    /* margin-bottom: 165px; */
  }

  @media screen and (min-width: 768px) {
    /* margin-bottom: 345px; */
  }

  @media screen and (min-width: 992px) {
    /* font-size: 86px; */
    /* margin-bottom: 140px; */
  }

  @media screen and (min-width: 1200px) {
    /* margin-bottom: 5px; */
    font-size: 95px;
  }

  @media screen and (min-width: 1792px) {
    font-size: 140px;
    /* margin-bottom: 150px; */
  }

  @media screen and (min-width: 2560px) {
    font-size: 180px;
    /* margin-bottom: 110px; */
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

  @media screen and (min-width: 384px) {
    bottom: 2%;
  }

  @media screen and (min-width: 412px) {
    bottom: 3%;
  }

  @media screen and (min-width: 768px) {
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
    /* bottom: 10%; */
    width: 70px;
  }

  @media screen and (min-width: 360px) and (min-height: 630px) {
    /* bottom: 4%; */
  }

  @media screen and (min-width: 375px) {
    /* bottom: 3.5%; */
  }

  @media screen and (min-width: 384px) {
    /* bottom: 4%; */
  }

  @media screen and (min-width: 412px) {
    /* bottom: 6.5%;
    right: -5px; */
    width: 90px;
  }

  @media screen and (min-width: 430px) {
    /* bottom: 4%;
    right: -10px; */
  }

  @media screen and (min-width: 576px) {
    /* right: 0; */
  }

  @media screen and (min-width: 768px) and (max-height: 883px) and (max-width: 991.98px) {
    /* display: none; */
  }

  @media screen and (min-width: 768px) {
    /* bottom: 2%;
    right: 0; */
  }

  @media screen and (min-width: 992px) {
    /* bottom: 14%; */
  }

  @media screen and (min-width: 1200px) {
    /* right: 0;
    bottom: 0; */
    width: 110px;
  }

  @media screen and (min-width: 1440px) {
    /* right: 0;
    bottom: 0; */
    width: 110px;
  }

  @media screen and (min-width: 2560px) {
    width: 210px;
  }
`;

export const MainWrapper = styled.div`
  /* position: relative; */
  /* outline: 1px dotted red;
  position: absolute;
  top: 0;
  right: 20%; */
`;

// background-color: #808080;
// &:hover {
//   background-color: #6e6d6d;
// }
// &:active {
//   background-color: #949494;
// }
