import styled from "styled-components";
import tasks from "../../../assets/images/background11.png";

export const MainBox = styled.div`
  padding: 20px;
  background-image: linear-gradient(
      rgba(241, 241, 241, 0.4),
      rgba(241, 241, 241, 0.4)
    ),
    url(${tasks});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 300px;
  border-radius: 10px;
`;
