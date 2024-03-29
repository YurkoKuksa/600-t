import styled from "styled-components";

export const MainBox = styled.div`
  margin: 0;
  border: 1px solid fff;
  background-color: #2e2f42;
  color: #fff;
  padding: 50px 0;
  border-bottom: 1px solid gray;
  line-height: 1.2;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  flex-direction: column;
  gap: 52px;

  // @media screen and (min-width: 320px){}
  // @media screen and (min-width: 576px){}
  //
  @media screen and (min-width: 768px) {
    margin: 0;
    border: 1px solid fff;
    background-color: #2e2f42;
    color: #fff;
    padding: 50px 20px;
    border-bottom: 1px solid gray;
    line-height: 1.2;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    flex-direction: row;
    gap: 8px;
  }
  //
  // @media screen and (min-width: 992px){}
  // @media screen and (min-width: 1220px){}
  // @media screen and (min-width: 1440px){}
  // @media screen and (min-width: 1920px){}
  // @media screen and (min-width: 2560px){}
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
  }
  /* OUTLINE */
  /* outline: 1px solid red; */
`;

export const Box = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  margin-bottom: 15px;

  @media screen and(min-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    margin-bottom: 15px;
  }
`;

export const Quote = styled.p`
  width: 420px;
  font-family: "Caveat";
  font-size: 22px;

  @media screen and (min-width: 768px) {
    width: 320px;
    font-family: "Caveat";
    font-size: 22px;
  }
`;

export const LogoLink = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.11;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  cursor: pointer;
`;

export const SvgPicture = styled.img`
  fill: #fff;
`;

export const AddressBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 576px) {
  }
  @media screen and (max-width: 767.98px) {
    padding-right: 0;
  }
  /* adaptive */
  @media screen and (min-width: 768px) {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    align-items: center;
    padding-right: 120px;
  }
  @media screen and (min-width: 992px) {
  }

  /* OUTLINE */
  /* outline: 1px solid red; */
`;

export const AddressWrapper = styled.address``;

export const Paragraph = styled.p`
  width: 420px;
  margin-bottom: 25px;
  font-size: 18px;
  color: #e0e0e0;

  @media screen and (min-width: 768px) {
    width: 350px;
    margin-bottom: 35px;
    font-size: 18px;
    color: #e0e0e0;
  }
`;

export const ContactLink = styled.a``;

export const ListStyled = styled.li`
  margin-bottom: 10px;
  &:hover {
    color: #dbd7d7;
  }
`;

export const SpanWrapper = styled.span`
  color: red;
`;

//
// @media screen and (min-width: 320px){}
// @media screen and (min-width: 576px){}
//
// @media screen and (min-width: 768px){}
//
// @media screen and (min-width: 992px){}
//@media screen and (min-width: 1220px){}
//@media screen and (min-width: 1440px){}
//@media screen and (min-width: 1920px){}
// @media screen and (min-width: 2560px){}
