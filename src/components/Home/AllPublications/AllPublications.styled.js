import styled from "styled-components";

export const MainBox = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #f8f6f6;
  border-radius: 10px;
  padding: 10px;
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);

  @media screen and (min-width: 360px) {
    padding: 20px;
  }
`;

export const TitleBox = styled.div`
  margin: 0 16px 20px;
`;

export const ImgBox = styled.div`
  /* flex-shrink: 0; */
  width: 280px;
  @media screen and (min-width: 1200px) {
    width: 300px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 15px;
  color: #6e6d6d;
  font-size: 33px;
  text-align: center;
`;

export const Description = styled.p`
  margin-bottom: 7px;
  font-weight: 500;
  color: #6b6363;
  font-size: 18px;
  text-indent: 40px;
  line-height: 1.6;
`;

/* OUTLINE */
/* outline: 1px solid green; */
// @media screen and (min-width: 360px){}

// для galaxy s7
// @media screen and (min-width: 360px) and (max-height: 638px) {}
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
// @media screen and (min-width: 1920px){}
// @media screen and (min-width: 2560px){}
