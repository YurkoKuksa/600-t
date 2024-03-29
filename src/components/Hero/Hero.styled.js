import styled from "styled-components";

import chemistry from "../../assets/images/chemistry76.png";

export const StyledBox = styled.div`
  background-color: #f8f6f6;
  padding: 290px 0;
  border: 1px solid cornflowerblue;
  border-radius: 10px;
  margin-bottom: 5px;
  background-image: url(${chemistry});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left 0 top 50%;

  position: relative;
`;
export const Flask = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 110px;
`;

export const MainTitle = styled.h1`
  margin-bottom: 5px;
  text-transform: capitalize;
  text-align: center;
  color: #1c1d27;
  background-color: rgb(142, 143, 153, 0.5);
  font-size: 96px;
`;

export const InfoBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 165px;

  opacity: 0.8;

  color: #e7e9fc;
  border: 1px solid #fff;
  background-color: #808080;
  padding: 10px 8px;
  border-radius: 8px;
  color: #fff;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.3s;
  box-shadow: ${({ theme }) =>
    `${theme.shadows.button}, ${theme.shadows.inner}`};

  &:hover {
    background-color: #6e6d6d;
  }
  &:active {
    background-color: #949494;
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
`;

export const ListWrapper = styled.ul`
  position: absolute;
  display: flex;
  gap: 5px;
  flex-direction: row;
  left: 50%;
  bottom: 5px;
  transform: translateX(-50%);
`;
