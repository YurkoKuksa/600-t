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

export const Description = styled.p`
  line-height: 1.6;
  letter-spacing: 0.04em;
  font-weight: 500;
  color: #6b6363;
  text-indent: 25px;
  padding: 0;
  width: 100%;

  @media screen and (min-width: 430px) {
    width: 360px;
    padding: 0;
  }

  @media screen and (min-width: 576px) {
    text-indent: 50px;
    font-size: 18px;
    margin-bottom: 10px;
    padding: 0;
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    padding: 0;
    width: 400px;
  }
  @media screen and (min-width: 992px) {
    width: 100%;
    padding: 0 50px;
  }

  @media screen and (min-width: 1856px) {
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 2560px) {
    font-size: 24px;
    margin-bottom: 50px;
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
    align-items: flex-end;
  }
`;

export const AddressWrapper = styled.address`
  width: 100%;

  justify-content: flex-end;

  @media screen and (min-width: 430px) {
    width: 360px;
  }

  @media screen and (min-width: 576px) {
    width: 480px;
    margin-bottom: 15px;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
  }

  @media screen and (min-width: 992px) {
    width: 380px;
  }

  @media screen and (min-width: 1200px) {
    width: 500px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1920px) {
    margin-bottom: 30px;
    width: 600px;
  }

  @media screen and (min-width: 2560px) {
    margin-bottom: 50px;
    width: 700px;
  }
`;

export const ContactLink = styled.a`
  cursor: pointer;
  display: flex;
  gap: 5px;
`;

export const ListStyled = styled.li`
  margin-bottom: 10px;

  &:hover {
    color: #808080;
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1856px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 22px;
  }
  @media screen and (min-width: 2560px) {
    font-size: 26px;
    margin-bottom: 15px;
  }
`;

export const SpanWrapper = styled.span``;

export const SvgItem = styled.img`
  display: inline-block;
  @media screen and (min-width: 1920px) {
    width: 25px;
  }
  @media screen and (min-width: 2560px) {
    width: 30px;
  }
`;

export const JobBox = styled.div`
  width: 100%;
  justify-content: flex-end;
  align-items: center;

  @media screen and (min-width: 430px) {
    width: 360px;
  }

  @media screen and (min-width: 576px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
  }

  @media screen and (min-width: 992px) {
    width: 380px;
  }

  @media screen and (min-width: 1200px) {
    width: 500px;
  }

  @media screen and (min-width: 1920px) {
    width: 600px;
  }

  @media screen and (min-width: 2560px) {
    width: 700px;
  }
`;

export const JobTitle = styled.h2`
  margin-bottom: 15px;
  color: #808080;

  font-size: 22px;

  @media screen and (min-width: 576px) {
    font-size: 24px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 26px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 2560px) {
    font-size: 32px;
    margin-bottom: 25px;
  }
`;

export const CollageName = styled.p`
  font-weight: 500;

  margin-bottom: 10px;

  @media screen and (min-width: 576px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1856px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 22px;
    margin-bottom: 15px;
  }
  @media screen and (min-width: 2560px) {
    font-size: 26px;
  }
`;

export const DecorPicture = styled.img`
  position: absolute;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.2;
  width: 300px;

  @media screen and (min-width: 430px) {
    top: 87%;
    left: 50%;
    width: 300px;
    opacity: 0.2;
  }

  @media screen and (min-width: 576px) {
    top: 50%;
    left: 70%;
    width: 300px;
    opacity: 0.2;
  }

  @media screen and (min-width: 768px) {
    top: 88%;
    left: 45%;
    width: 300px;
    opacity: 0.6;
  }
  @media screen and (min-width: 992px) {
    top: 65%;
    left: 25%;
    width: 400px;
  }
  @media screen and (min-width: 1280px) {
    top: 68%;
    left: 28%;
    width: 450px;
  }
  @media screen and (min-width: 1440px) {
    width: 500px;
    top: 62%;
    left: 33%;
  }
  @media screen and (min-width: 1600px) {
    width: 600px;
    top: 58%;
    left: 38%;
  }
  @media screen and (min-width: 2560px) {
    width: 1000px;
  }
`;
