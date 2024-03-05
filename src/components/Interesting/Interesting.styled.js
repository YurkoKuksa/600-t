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
`;

export const ListWrapper = styled.li`
  margin-bottom: 25px;
`;

export const Title = styled.h2`
  font-size: 22px;
  color: #6e6d6d;
  margin-bottom: 7px;
`;

export const Paragraph = styled.p`
  font-size: 18px;
`;
