import styled from "styled-components";

export const MainBoxAdm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #c0c0c0;
  height: 100vh;
  padding: 0 100px;
`;

export const InnerBox = styled.div`
  padding: 20px 0;
  width: 100%;
`;

export const PostBox = styled.div`
  padding: 20px 0;
`;

export const PostTitle = styled.h2``;

export const FormStyle = styled.form`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const LabelInput = styled.label`
  color: #808080;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const InputStyled = styled.input`
  padding: 4px;
  width: 700px;

  outline: transparent;

  &:focus {
    border-color: #808080;
  }
  &:hover {
    border-color: #808080;
  }
`;

export const InputStyledDetail = styled.input`
  padding: 4px;
  width: 100px;

  outline: transparent;

  &:focus {
    border-color: #808080;
  }
`;

export const SelectStyled = styled.select`
  padding: 4px;
  width: 120px;

  outline: transparent;

  &:focus {
    border-color: #808080;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const SubmitButton = styled.button`
  width: 100px;
  height: 100%;
  padding: 8px 5px;
  font-size: 14px;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  color: #e7e9fc;
  border: 1px solid #fff;
  background-color: #0a2161;
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

  /* @media screen and (min-width: 412px) {
    padding: 10px 8px;
  }

  @media screen and (min-width: 576px) {
    font-size: 16px;
    width: 165px;
  }

  @media screen and (min-width: 1200px) {
    width: 165px;
    padding: 10px 8px;
    font-size: 16px;
  }

  @media screen and (min-width: 1792px) {
    width: 200px;
    padding: 17px 10px;
    font-size: 18px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 22px;
    width: 230px;
    padding: 22px 10px;
  }

  @media screen and (min-width: 2560px) {
    font-size: 26px;
    width: 280px;
    padding: 25px 10px;
  } */
`;
