import styled from "styled-components";

export const MainBox = styled.div`
  margin: 0;
  border: 1px solid fff;
  background-color: #2e2f42;
  color: #fff;
  padding: 100px 14px 14px;
  border-bottom: 1px solid gray;
  line-height: 1.2;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 100px;

  @media screen and (min-width: 1200px) {
    padding: 100px 16px 14px;
  }

  @media screen and (min-width: 2560px) {
    padding: 100px 16px 24px;
  }
`;

export const MainWrapper = styled.div`
  width: 290px;
  @media screen and (min-width: 576px) {
    width: 340px;
  }

  @media screen and (min-width: 1200px) {
    width: 100%;
    display: flex;
    flex-direction: row;

    column-gap: 350px;
  }

  @media screen and (min-width: 1920px) {
    column-gap: 650px;
  }

  @media screen and (min-width: 2560px) {
    column-gap: 850px;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;

  @media screen and (min-width: 1200px) {
    align-items: flex-start;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 50px;
  }

  @media screen and (min-width: 1920px) {
    margin-left: 100px;
  }
  @media screen and (min-width: 2560px) {
    margin-left: 150px;
  }
`;

export const Box = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 15px;

  @media screen and (min-width: 1920px) {
    margin-bottom: 30px;
  }
`;

export const Quote = styled.p`
  font-family: "Caveat";
  font-size: 18px;

  @media screen and (min-width: 576px) {
    font-size: 20px;
  }

  @media screen and (min-width: 768px) {
    font-size: 21px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 22px;
    width: 360px;
  }

  @media screen and (min-width: 1440px) {
    width: 340px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 24px;
  }

  @media screen and (min-width: 2560px) {
    font-size: 30px;
    width: 400px;
  }
`;

export const LogoLink = styled.p`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  cursor: pointer;

  @media screen and (min-width: 1920px) {
    font-size: 20px;
  }
  @media screen and (min-width: 2560px) {
    font-size: 24px;
  }
`;

export const SvgPicture = styled.img`
  fill: #fff;
  @media screen and (min-width: 2560px) {
    width: 60px;
    height: 60px;
  }
`;

export const AddressBox = styled.div`
  @media screen and (min-width: 1200px) {
    width: 100%;
  }
`;

export const ContactList = styled.ul``;

export const Paragraph = styled.p`
  margin-bottom: 25px;
  font-size: 14px;
  color: #e0e0e0;

  @media screen and (min-width: 576px) {
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
    width: 360px;
    margin-left: auto;
    margin-right: auto;
    padding: 5px 0;
  }
  @media screen and (min-width: 1920px) {
    font-size: 20px;
    width: 400px;
    margin-bottom: 35px;
  }
  @media screen and (min-width: 2560px) {
    font-size: 24px;
    width: 480px;
    padding: 10px 0;
  }
`;

export const AddressWrapper = styled.address`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1200px) {
    width: 360px;
    justify-content: flex-start;
    margin: 0 auto;
  }

  @media screen and (min-width: 1920px) {
    width: 400px;
  }
  @media screen and (min-width: 2560px) {
    width: 480px;
  }
`;

export const ListStyled = styled.li`
  margin-bottom: 10px;
  font-size: 14px;
  &:hover {
    color: #dbd7d7;
  }

  @media screen and (min-width: 576px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1200px) {
  }

  @media screen and (min-width: 1920px) {
    font-size: 18px;
  }

  @media screen and (min-width: 2560px) {
    font-size: 22px;
  }
`;

export const ContactLink = styled.a``;

export const SpanWrapper = styled.span`
  color: red;
`;

export const AllRightsBox = styled.div`
  width: 100%;
`;

export const CopyRightText = styled.p`
  color: #6e6d6d;
  font-size: 12px;

  text-align: center;

  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 18px;
  }
  @media screen and (min-width: 2560px) {
    font-size: 20px;
  }
`;

/* OUTLINE */
/* outline: 1px solid green; */
// @media screen and (min-width: 576px){}
// @media screen and (min-width: 768px){}
// @media screen and (min-width: 992px){}
// @media screen and (min-width: 1200px){}
// @media screen and (min-width: 1440px){}
// @media screen and (min-width: 1920px){}
// @media screen and (min-width: 2560px){}
