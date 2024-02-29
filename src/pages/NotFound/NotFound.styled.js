import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #c0c0c0;
  height: 100vh;
`;

export const MainTitle = styled.h1`
  font-size: 120px;
  font-weight: 700;
  color: #727572;
  text-shadow: 2px 2px 5px rgba(255, 255, 255, 0.5);
  margin-bottom: 30px;
  -webkit-text-stroke: 2px #3b3d3b;
`;

export const TextInfo = styled.p`
  font-size: 50px;
  margin-bottom: 30px;
  color: #707070;
`;

export const BackLink = styled(Link)`
  font-size: 35px;
  padding: 15px;

  border: 1px solid darkgrey;
  border-radius: 15px;
  background-color: #808080;
  transition: font-weight 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s;
  box-shadow: ${({ theme }) =>
    `${theme.shadows.button}, ${theme.shadows.inner}`};

  &:hover {
    font-weight: 700;
    background-color: #6e6d6d;
  }
`;
