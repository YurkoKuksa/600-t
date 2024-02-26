import styled from "styled-components";

export const MainBox = styled.div`
  margin: 0;
  border: 1px solid fff;
  background-color: #2e2f42;
  color: #fff;
  padding: 10px 20px;
  border-bottom: 1px solid gray;
  line-height: 1.2;
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

export const SvgPicture = styled.img`
  fill: #fff;
`;
