import styled from "styled-components";

export const MainModalBox = styled.div`
  padding: 30px 40px;
  background-color: #fff;

  position: absolute;
  right: 50%;
  top: 25%;

  width: 550px;

  border-radius: 5px;
  transition: transform 300ms ease-in-out;

  box-shadow: 0px 1px 6px 0px rgba(46, 47, 66, 0.08),
    0px 1px 1px 0px rgba(46, 47, 66, 0.16),
    0px 2px 1px 0px rgba(46, 47, 66, 0.08),
    inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h1`
  text-align: center;
  margin: 15px 0;
`;

export const Book = styled.img`
  margin: 25px auto;
`;

export const ModalCloseButton = styled.button`
  margin: 30px auto 0;
  display: block;
  width: 165px;
  opacity: 0.8;

  color: #e7e9fc;
  border: 1px solid #fff;
  background-color: #0a2161;
  padding: 10px 8px;
  border-radius: 8px;
  color: #fff;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.3s;
  box-shadow: ${({ theme }) =>
    `${theme.shadows.button}, ${theme.shadows.inner}`};

  &:hover {
    background-color: #1f4fd1;
  }
  &:active {
    background-color: #406ce3;
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
`;

export const GoogleForm = styled.a`
  text-align: center;

  display: block;
  margin: 35px auto 40px;
  padding: 5px 0;
  border-radius: 8px;

  width: 200px;

  font-size: 18px;
  line-height: 1.6;
  letter-spacing: 0.04em;
  font-weight: 500;
  color: #ffa;
  background-color: #de1956;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #ff7;
    background-color: #e8316a;
    transform: scale(1.05);
  }
`;

export const CloseMenuBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  height: 24px;
  width: 24px;

  border-radius: 50%;
  /* background-color: #2e2f42; */
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #d5d5d5;
    transform: scale(1.15);
  }
`;
