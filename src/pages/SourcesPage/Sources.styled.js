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

export const ContactBox = styled.div`
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

  position: relative;

  @media screen and (min-width: 430px) {
  }

  @media screen and (min-width: 576px) {
    padding: 40px 20px;
  }

  @media screen and (min-width: 2048px) {
    padding: 40px 60px;
  }

  @media screen and (min-width: 2560px) {
    padding: 40px 20px;
  }
`;

export const MainTitle = styled.h1`
  text-align: center;
  margin-bottom: 16px;
  justify-content: flex-end;
  font-size: 32px;

  font-weight: 700;
  color: #0a2161;

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

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 576px) {
  }

  @media screen and (min-width: 992px) {
    align-items: flex-start;
  }
`;

export const ParagraphList = styled.ul`
  margin-bottom: 60px;
  min-width: 100%;
  @media screen and (min-width: 2560px) {
    margin-bottom: 120px;
  }
`;

export const ListSources = styled.li`
  background-color: rgb(142, 143, 153, 0.4);
  border-radius: 5px;
  padding: 5px 25px;
  display: flex;
  gap: 25px;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 20px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #b2b2b2;
  }

  @media screen and (min-width: 576px) {
    padding: 5px 50px;
  }
`;

export const Paragraph = styled.p`
  line-height: 1.6;
  letter-spacing: 0.04em;
  font-weight: 500;
  color: #6b6363;

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

export const DownloadFile = styled.img`
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    width: 19px;
    height: 19px;
  }

  @media screen and (min-width: 1200px) {
    width: 20px;
    height: 20px;
  }

  @media screen and (min-width: 1920px) {
    width: 22px;
    height: 22px;
  }

  @media screen and (min-width: 2560px) {
    width: 23px;
    height: 23px;
  }
`;

export const LinkDownload = styled.a`
  outline: grey dotted 1px;

  padding: 5px 15px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #999999;
  }
`;

export const DescripGroup = styled.ul`
  display: flex;
  gap: 35px;
`;

export const ParagraphName = styled.p`
  line-height: 1.6;
  letter-spacing: 0.04em;
  font-weight: 500;
  color: #888282;

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
