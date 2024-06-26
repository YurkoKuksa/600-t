import styled from "styled-components";

export const MainBox = styled.div`
  width: auto;
  min-width: 200px;

  position: relative;
  margin: 3px 4px;
  background-color: #808080;
  padding: 0 24px;
  border: 1px solid cornflowerblue;
  color: #fff;
  box-shadow: 0px 1px 6px 0px rgba(46, 47, 66, 0.08),
    0px 1px 1px 0px rgba(46, 47, 66, 0.16),
    0px 2px 1px 0px rgba(46, 47, 66, 0.08);

  @media only screen and (max-width: 767.98px) {
    display: none;
  }

  @media screen and (min-width: 1856px) {
    min-width: 250px;
    padding: 0 35px;
  }
  @media screen and (min-width: 2560px) {
    min-width: 280px;
    padding: 0 42px;
  }
`;

export const AsidePic = styled.img`
  margin: 10px auto;
  width: 80px;
  height: 80px;
  @media screen and (min-width: 1920px) {
    width: 90px;
    height: 90px;
  }
  @media screen and (min-width: 2560px) {
    width: 100px;
    height: 100px;
  }
`;
