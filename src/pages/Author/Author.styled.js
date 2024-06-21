import styled from "styled-components";

import tasks from "../../assets/images/chemistry91.png";

export const MainBox = styled.div`
  padding: 3px;
  background-color: #c0c0c0;
  max-width: 100%;
  margin: 0;
  border: 1px solid cornflowerblue;
  flex-grow: 1;
  box-shadow: 0px 1px 6px 0px rgba(46, 47, 66, 0.08),
    0px 1px 1px 0px rgba(46, 47, 66, 0.16),
    0px 2px 1px 0px rgba(46, 47, 66, 0.08);
  display: flex;
`;

export const AuthBox = styled.div`
  border-radius: 10px;
  background-image: linear-gradient(
      rgba(241, 241, 241, 0.4),
      rgba(241, 241, 241, 0.4)
    ),
    url(${tasks});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 300px;
  flex-grow: 1;
  padding: 20px;
  border: 1px solid cornflowerblue;
  display: flex;

  flex-direction: column;
  gap: 20px;
  position: relative;

  @media screen and (min-width: 576px) {
    padding: 40px 20px;
  }
`;

export const MainWrapper = styled.div`
  @media screen and (min-width: 1200px) {
    display: flex;
    gap: 50px;
  }

  @media screen and (min-width: 1440px) {
    gap: 20px;
  }

  @media screen and (min-width: 1920px) {
    justify-content: center;
    gap: 100px;
  }
  /* outline: 1px solid green; */
`;

export const PictureBox = styled.div`
  /* flex-shrink: 0; */
  /* outline: 1px solid green; */
`;

export const PortretPicture = styled.img`
  border-radius: 10px;
  width: 500px;

  margin: 0 auto 15px;

  @media screen and (min-width: 576px) {
    /* margin: 0 auto 30px; */
  }

  @media screen and (min-width: 1440px) {
    margin: 0 auto;
  }

  @media screen and (min-width: 2048px) {
    width: 600px;
  }

  @media screen and (min-width: 2560px) {
    min-width: 700px;
  }
  border: 1.3px solid cornflowerblue;
`;

export const MainTitle = styled.h1`
  /* font-family: "Caveat"; */
  /* color: #808080;
  font-size: 70px; */
  text-align: center;
  color: #0a2161;
  /* екп */
  font-weight: 700;

  /* font-size: 28px; */
  margin-bottom: 15px;

  @media screen and (min-width: 576px) {
    font-size: 40px;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 50px;
  }

  @media screen and (min-width: 2560px) {
    font-size: 70px;
  }
`;

export const ParagraphList = styled.ul`
  max-width: 900px;
  margin-bottom: 60px;

  @media screen and (min-width: 1920px) {
  }

  @media screen and (min-width: 2560px) {
    min-width: 1200px;
  }

  @media screen and (min-width: 2560px) {
    margin-bottom: 120px;
  }
  /* outline: 1px solid green; */
`;

export const Paragraph = styled.p`
  line-height: 1.6;
  letter-spacing: 0.04em;
  font-weight: 500;
  color: #6b6363;

  text-indent: 25px;
  margin-bottom: 5px;

  @media screen and (min-width: 576px) {
    text-indent: 50px;
    font-size: 18px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
  }

  @media screen and (min-width: 2560px) {
    font-size: 24px;
  }
`;

export const DecorPicture = styled.img`
  /* position: absolute;
  bottom: 0;
  left: 55%;
  transform: translateX(-50%); */
  width: 300px;
  /* height: 100%; */
  margin: 0 auto;

  @media screen and (min-width: 1200px) {
    margin: 0 0 0 -50px;
  }
  @media screen and (min-width: 1440px) {
    margin: 0 auto;
  }

  @media screen and (min-width: 2048px) {
    width: 500px;
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
// iphone15 Plus
// @media screen and (min-width: 430px){}
// @media screen and (min-width: 576px){}
// @media screen and (min-width: 768px){}
// @media screen and (min-width: 992px){}
// @media screen and (min-width: 1200px){}
// @media screen and (min-width: 1440px){}
//
// @media screen and (min-width: 1792px){}
// @media screen and (min-width: 1856px){}
//
// @media screen and (min-width: 1920px){}
//
// @media screen and (min-width: 12048px){}
//
// @media screen and (min-width: 2560px){}
