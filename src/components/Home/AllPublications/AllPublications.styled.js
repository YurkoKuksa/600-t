import styled from "styled-components";

export const MainBox = styled.div`
  display: flex;
  background-color: #f8f6f6;
  border-radius: 10px;
  padding: 20px;
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
`;

export const TitleBox = styled.div`
  margin: 0 16px 20px;
`;

export const ImgBox = styled.div`
  flex-shrink: 0;
`;

export const Title = styled.h2`
  margin-bottom: 15px;
  color: #6e6d6d;
  font-size: 33px;
  text-align: center;
`;

export const Description = styled.p`
  margin-bottom: 7px;
  font-weight: 500;
  color: #6b6363;
  font-size: 18px;
  text-indent: 40px;
  line-height: 1.6;
`;
