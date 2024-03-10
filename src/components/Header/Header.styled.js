import styled from "styled-components";

export const Box = styled.div`
  border-bottom: 1px solid gray;
  background-color: #fcfcfc;
  color: #2e2f42;
  line-height: 1.2;
  box-shadow: 0px 1px 6px 0px rgba(46, 47, 66, 0.08),
    0px 1px 1px 0px rgba(46, 47, 66, 0.16),
    0px 2px 1px 0px rgba(46, 47, 66, 0.08);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 5px 16px;

  @media all and (max-width: 767.98px) {
    position: sticky;
    top: 0;
    z-index: 999;
    margin: 0;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
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

export const NameStyle = styled.p`
  font-family: "Marck Script";
  font-size: 25px;
  color: #e3e3e3;
  font-weight: 500;
  font-style: italic;
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  padding-right: 30px;

  letter-spacing: 0.3em;

  @media screen and (max-width: 577.89px) {
    font-size: 16px;
  }
`;

export const BurgerSvg = styled.img`
  /* outline: 1px solid red; */
  width: 32px;
  height: 22px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
