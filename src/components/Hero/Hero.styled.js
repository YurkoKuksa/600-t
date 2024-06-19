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

  /* display: flex;
  height: 93.3vh;
  flex: 1; */

  @media screen and (min-width: 360px) and (min-height: 630px) {
    padding: 180px 0;
  }

  @media screen and (min-width: 375px) {
    padding: 150px 0;
  }

  @media screen and (min-width: 412px) {
  }

  @media screen and (min-width: 1200px) {
    padding: 290px 0;
    border-radius: 10px;
    margin-bottom: 5px;
  }
`;

export const MainTitle = styled.h1`
  margin-bottom: 145px;
  font-size: 50px;

  /* margin-bottom: 55px; */
  text-transform: capitalize;
  text-align: center;
  color: #1c1d27;
  background-color: rgb(142, 143, 153, 0.5);

  @media screen and (min-width: 360px) {
    margin-bottom: 175px;
  }

  // для galaxy s22
  @media screen and (min-width: 360px) and (min-height: 630px) {
    margin-bottom: 110px;
  }

  @media screen and (min-width: 375px) {
    margin-bottom: 70px;
  }

  @media screen and (min-width: 384px) {
    font-size: 80px;
    margin-bottom: 55px;
  }

  @media screen and (min-width: 412px) {
    font-size: 85px;
    margin-bottom: 55px;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 5px;
    font-size: 96px;
  }
`;

export const ListWrapper = styled.ul`
  bottom: 19%;

  gap: 5px;
  left: 50%;
  display: flex;
  position: absolute;
  flex-direction: column;
  /* bottom: -15%; */
  transform: translateX(-50%);

  @media screen and (min-width: 360px) {
    bottom: 24%;
  }

  @media screen and (min-width: 375px) {
    bottom: 16%;
  }

  @media screen and (min-width: 384px) {
    bottom: 10%;
  }

  @media screen and (min-width: 412px) {
  }

  @media screen and (min-width: 1200px) {
    gap: 5px;
    left: 50%;
    bottom: 15%;
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

  @media screen and (min-width: 1200px) {
    width: 165px;
    padding: 10px 8px;
    border-radius: 8px;
    font-size: 16px;
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

  @media screen and (min-width: 360px) {
  }

  @media screen and (min-width: 1200px) {
    padding: 18px 15px;
    border-radius: 8px;
    width: 165px;
    font-size: 16px;
  }
`;

export const Flask = styled.img`
  position: absolute;
  bottom: 15%;
  right: 0;
  width: 50px;

  @media screen and (max-width: 359px) {
    display: none;
  }

  @media screen and (min-width: 360px) {
    bottom: 10%;
    width: 70px;
  }

  @media screen and (min-width: 360px) and (min-height: 630px) {
    bottom: 4%;
  }

  @media screen and (min-width: 375px) {
    bottom: 3.5%;
  }

  @media screen and (min-width: 384px) {
    bottom: 4%;
  }

  @media screen and (min-width: 412px) {
  }

  @media screen and (min-width: 1200px) {
    right: 0;
    bottom: 0;
    width: 110px;
  }
`;

/* OUTLINE */
/* outline: 1px solid green; */
// @media screen and (min-width: 360px){}

// для galaxy s22
// @media screen and (min-width: 360px) and (min-height: 638px) {}
// @media screen and (min-width: 375px){}

// iphone8
// @media screen and (min-width: 375px) and (min-height: 526px) {}

// @media screen and (min-width: 384px){}
// @media screen and (min-width: 412px){}
// @media screen and (min-width: 576px){}
// @media screen and (min-width: 768px){}
// @media screen and (min-width: 992px){}
// @media screen and (min-width: 1200px){}
// @media screen and (min-width: 1440px){}

// @media screen and (min-width: 1792px){}
// @media screen and (min-width: 1856px){}

// @media screen and (min-width: 1920px){}
// @media screen and (min-width: 2560px){}

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
