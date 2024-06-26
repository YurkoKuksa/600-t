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

  position: relative;
`;

export const ListWrapper = styled.li`
  margin-bottom: 25px;
`;

export const Title = styled.h2`
  color: #6e6d6d;
  margin-bottom: 7px;

  font-size: 22px;

  @media screen and (min-width: 576px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
    font-size: 28px;
  }
  @media screen and (min-width: 2560px) {
    font-size: 32px;
  }
`;

export const Paragraph = styled.p`
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`;

export const Description = styled.p`
  margin-bottom: 20px;
  margin-top: 10px;
  font-size: 18px;
  text-indent: 40px;
`;

export const WrapperFormula = styled.span`
  display: block;
  @media screen and (min-width: 412px) {
    display: inline;
  }
`;

export const ScrollSpot = styled.div`
  position: absolute;
  top: 50px;
  right: 50%;

  transform: translateX(50%);

  @media screen and (min-width: 768px) {
    top: 105px;
  }

  @media screen and (min-width: 1200px) {
    top: 100px;
  }
`;
