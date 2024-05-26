import styled from "styled-components";
import tasks from "../../../assets/images/background11.png";

export const MainBox = styled.div`
  padding: 20px;
  background-image: linear-gradient(
      rgba(251, 251, 251, 0.3),
      rgba(251, 251, 251, 0.3)
    ),
    url(${tasks});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 300px;
  border-radius: 10px;
`;

//  rgba(241, 241, 241, 0.3), rgba(241, 241, 241, 0.3);
