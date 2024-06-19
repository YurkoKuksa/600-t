import styled from "styled-components";
import tasks from "../../../assets/images/background11.png";

export const MainBox = styled.div`
  padding: 5px;
  background-image: linear-gradient(
      rgba(251, 251, 251, 0.3),
      rgba(251, 251, 251, 0.3)
    ),
    url(${tasks});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 560px;
  border-radius: 10px;

  @media screen and (min-width: 576px) {
    padding: 10px;
  }
  @media screen and (min-width: 1200px) {
    padding: 20px;
  }

  @media screen and (min-width: 2048px) {
    min-height: 860px;
  }
`;
