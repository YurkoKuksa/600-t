import styled from "styled-components";
import backGr from "../../assets/images/chemistry61.png";

export const MainBox = styled.div`
  background-color: #f8f6f6;
  border-radius: 10px;
  padding: 20px;
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);

  background-image: linear-gradient(
      rgba(241, 241, 241, 0.4),
      rgba(241, 241, 241, 0.4)
    ),
    url(${backGr});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ListWrapper = styled.li`
  margin-bottom: 25px;
`;

export const Title = styled.h2`
  color: #6e6d6d;
  margin-bottom: 7px;

  font-size: 20px;

  @media screen and (min-width: 576px) {
    font-size: 22px;
  }
`;

export const Paragraph = styled.p`
  @media screen and (min-width: 576px) {
    font-size: 18px;
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
// @media screen and (min-width: 1707px){}
// @media screen and (min-width: 1792px){}
// @media screen and (min-width: 1856px){}
//
// @media screen and (min-width: 1920px){}
//
// @media screen and (min-width: 2048px){}
//
// @media screen and (min-width: 2560px){}
