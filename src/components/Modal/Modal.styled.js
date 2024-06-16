import styled from "styled-components";

export const BackGraound = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(46, 47, 66, 0.4);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 998;
  opacity: 1;
  pointer-events: initial;
  visibility: visible;
  backdrop-filter: blur(8px);
`;

export const MainModalBox = styled.div`
  padding: 14px 10px;
  width: 290px;

  background-color: #fff;
  position: fixed;
  left: 50%;
  top: 54%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  transition: transform 300ms ease-in-out;
  box-shadow: 0px 1px 6px 0px rgba(46, 47, 66, 0.08),
    0px 1px 1px 0px rgba(46, 47, 66, 0.16),
    0px 2px 1px 0px rgba(46, 47, 66, 0.08),
    inset 0 0 10px 5px rgba(0, 0, 0, 0.3);

  @media screen and (min-width: 360px) {
    padding: 24px 10px;
    width: 330px;
    top: 53%;
  }

  @media screen and (min-width: 384px) {
    padding: 32px 10px;
    width: 355px;
    top: 52%;
  }
  @media screen and (min-width: 412px) {
    width: 390px;
    top: 52%;
  }

  @media screen and (min-width: 1440px) {
    padding: 30px 40px;
    width: 550px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 15px;
  font-size: 20px;
  @media screen and (min-width: 1440px) {
    margin: 15px 0;
  }
`;

export const Paragraph = styled.p`
  line-height: 1.1;
  letter-spacing: 0.04em;
  font-weight: 400;
  font-size: 14px;
  text-indent: 10px;
  margin: 0 14px 15px;

  color: #6b6363;

  @media screen and (min-width: 1440px) {
    line-height: 1.6;
    letter-spacing: 0.04em;
    font-weight: 500;
    font-size: 18px;
    text-indent: 50px;
    margin-bottom: 5px;
  }
`;

export const Book = styled.img`
  margin: 5px auto 15px;
  width: 160px;

  @media screen and (min-width: 360px) {
    width: 200px;
  }

  @media screen and (min-width: 384px) {
    width: 225px;
  }

  @media screen and (min-width: 412px) {
    width: 290px;
  }

  @media screen and (min-width: 1440px) {
    margin: 25px auto;
  }
`;

export const ModalCloseButton = styled.button`
  margin: 0 auto 5px;
  width: 100px;
  padding: 5px 4px;
  /* width: 125px; */
  /* padding: 8px 6px; */
  font-size: 14px;
  opacity: 0.8;
  display: block;
  color: #e7e9fc;
  border: 1px solid #fff;
  background-color: #808080;
  border-radius: 8px;
  color: #fff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.3s;
  box-shadow: ${({ theme }) =>
    `${theme.shadows.button}, ${theme.shadows.inner}`};
  &:hover {
    background-color: #6f6f6f;
  }
  &:active {
    background-color: #919191;
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
  @media screen and (min-width: 412px) {
    width: 125px;
    padding: 8px 6px;
  }
  @media screen and (min-width: 1440px) {
    margin: 30px auto 0;
    display: block;
    width: 165px;
    padding: 10px 8px;
  }
`;

export const GoogleForm = styled.a`
  margin: 0 auto 15px;
  padding: 5px 0;
  border-radius: 8px;
  width: 145px;
  font-size: 14px;
  line-height: 1.6;
  letter-spacing: 0.04em;
  font-weight: 500;

  text-align: center;
  display: block;
  color: #fff;
  /* background-color: #de1956; */
  background-color: #4d5ae5;
  background-color: #1586ac;
  opacity: 0.9;

  box-shadow: ${({ theme }) =>
    `${theme.shadows.button}, ${theme.shadows.inner}`};

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s,
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  /* &:hover {
    color: #ff7;
    background-color: #e8316a;
    transform: scale(1.05);
  } */

  &:hover {
    background-color: #116f8e;
    transform: scale(1.05);
  }
  &:active {
    background-color: #1baad9;
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }

  @media screen and (min-width: 1440px) {
    margin: 35px auto 40px;
    padding: 5px 0;
    border-radius: 8px;
    width: 200px;
    font-size: 18px;
    line-height: 1.6;
    letter-spacing: 0.04em;
    font-weight: 500;
  }
`;

export const CloseMenuBtn = styled.button`
  top: 8px;
  right: 8px;
  height: 16px;
  width: 16px;

  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #d5d5d5;
    transform: scale(1.15);
  }

  @media screen and (min-width: 360px) {
    top: 12px;
    right: 12px;
  }

  @media screen and (min-width: 384px) {
    top: 16px;
    right: 16px;
  }
  @media screen and (min-width: 1440px) {
    top: 24px;
    right: 24px;
    height: 24px;
    width: 24px;
  }
`;

export const ListStyled = styled.li`
  margin-bottom: 5px;

  font-size: 14px;

  &:hover {
    color: #808080;
  }
  @media screen and (min-width: 360px) {
    margin-bottom: 10px;
  }
  @media screen and (min-width: 412px) {
    margin-bottom: 15px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 10px;
    font-size: 18px;
  }
`;

export const SvgItem = styled.img`
  display: inline;
  margin: 0;
  width: 14px;
  @media screen and (min-width: 384px) {
    width: 16px;
  }
`;
export const SpanWrapper = styled.span``;
export const ContactLink = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;

  flex-direction: row;
  gap: 1px;
  margin: 0;
`;

export const List = styled.ul`
  width: 220px;
  margin: 0 auto 15px;
  @media screen and (min-width: 360px) {
    margin: 0 auto 25px;
  }

  @media screen and (min-width: 384px) {
    margin: 0 auto 30px;
  }
  @media screen and (min-width: 412px) {
    margin-bottom: 35px;
  }
`;

export const DownloadFile = styled.img`
  width: 14px;
  height: 14px;
`;

export const SpanDownload = styled.span`
  font-size: 14px;
`;

export const DownLoadFile = styled.a`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media screen and (min-width: 360px) {
    margin-bottom: 25px;
  }
  @media screen and (min-width: 412px) {
    margin-bottom: 35px;
  }
`;
/* OUTLINE */
/* outline: 1px solid green; */
// @media screen and (min-width: 360px){}
// @media screen and (min-width: 375px){}
// @media screen and (min-width: 384px){}
// @media screen and (min-width: 412px){}
// @media screen and (min-width: 576px){}
// @media screen and (min-width: 768px){}
// @media screen and (min-width: 992px){}
// @media screen and (min-width: 1200px){}
// @media screen and (min-width: 1440px){}
// @media screen and (min-width: 1920px){}
// @media screen and (min-width: 2560px){}
