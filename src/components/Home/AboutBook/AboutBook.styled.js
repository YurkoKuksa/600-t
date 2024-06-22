import styled from "styled-components";

export const MainBox = styled.div`
  display: flex;
  background-color: #f8f6f6;
  border-radius: 10px;
  padding: 15px 5px;
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);

  position: relative;

  @media screen and (min-width: 576px) {
    padding: 20px;
  }

  @media screen and (min-width: 1440px) {
    padding: 50px;
  }
`;

export const DescripBox = styled.div`
  margin: 0 16px;

  @media screen and (min-width: 1440px) {
    margin: 0 auto;
  }
`;

export const TitleBox = styled.div`
  margin-bottom: 20px;

  @media screen and (min-width: 1200px) {
    margin-bottom: 35px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 45px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 15px;
  color: #6e6d6d;
  font-size: 20px;
  text-align: center;

  @media screen and (min-width: 576px) {
    font-size: 32px;
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: 35px;
  }
  /* sdgsgsdfghdshd */
  @media screen and (min-width: 1707px) {
  }
  /* dfjghjsdhgjsdfg */

  @media screen and (min-width: 1920px) {
    font-size: 34px;
  }
  @media screen and (min-width: 2560px) {
    font-size: 38px;
    margin-bottom: 55px;
  }
`;

export const Paragraph = styled.p`
  font-style: italic;
  font-size: 14px;
  @media screen and (min-width: 576px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 18px;
  }
  @media screen and (min-width: 2560px) {
    font-size: 22px;
  }
`;

// DETAILED  DESCRIPTION
export const Bold = styled.span`
  font-weight: 700;
  @media screen and (min-width: 1920px) {
    font-size: 18px;
  }
  @media screen and (min-width: 2560px) {
    font-size: 22px;
  }
`;

export const OtherDescrBox = styled.div`
  margin-bottom: 20px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
  }
`;

export const ListStyle = styled.ul``;

export const ParagDescription = styled.p`
  margin-bottom: 15px;
  font-weight: 500;
  color: #6b6363;

  font-size: 14px;

  @media screen and (min-width: 576px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1500px) {
    max-width: 800px;
  }
  @media screen and (min-width: 2560px) {
    font-size: 22px;
    margin-bottom: 25px;
  }
`;

export const SmallTitle = styled.h3`
  margin-bottom: 15px;
  color: #424040;
  text-align: center;
  font-size: 18px;

  @media screen and (min-width: 576px) {
    font-size: 1.17em;
    margin-left: 25px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 26px;
  }

  @media screen and (min-width: 2560px) {
    font-size: 30px;
  }
`;

export const ForWhoListStyle = styled.ul``;

export const ForWhoDescription = styled.p`
  margin-bottom: 7px;
  font-weight: 500;
  color: #6b6363;
  font-size: 16px;

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

export const SpanTick = styled.span`
  color: #197bd1;
  font-size: 18px;
  margin-right: 5px;
  font-weight: 500;
  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
`;

export const SpanName = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #525252;

  @media screen and (min-width: 576px) {
    font-size: 19px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 22px;
  }
  @media screen and (min-width: 2560px) {
    font-size: 26px;
  }
`;

export const WhyListStyle = styled.ul`
  list-style-type: circle;
  padding-left: 16px;
`;

export const WhyDescription = styled.p`
  margin-bottom: 7px;
  font-weight: 500;
  color: #6b6363;
  font-size: 16px;

  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
  @media screen and (min-width: 2560px) {
    font-size: 24px;
  }
`;

export const BookPicture = styled.img`
  max-width: 300px;
  display: block;
  margin: 0 auto;
  @media screen and (min-width: 1200px) {
    width: 300px;
  }

  @media screen and (min-width: 2560px) {
    min-width: 400px;
  }
`;

export const BookBox = styled.div`
  margin-bottom: 20px;

  @media screen and (min-width: 2560px) {
    margin-bottom: 50px;
    margin-left: 120px;
    padding: 0 120px;
  }
`;

export const TextAndBookWrapper = styled.div`
  @media screen and (min-width: 1200px) {
    display: flex;
    align-items: space-around;
    justify-content: space-between;
    gap: 20px;
    flex-direction: row-reverse;
  }
  @media screen and (min-width: 1500px) {
    gap: 150px;
  }

  @media screen and (min-width: 2560px) {
    font-size: 200px;
    padding-right: 40px;
  }
`;
