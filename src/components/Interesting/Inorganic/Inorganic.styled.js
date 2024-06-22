import styled from "styled-components";

import backGr from "../../../assets/images/chemistry61.png";

export const MainBox = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isVisible",
})`
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

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible ? "translateX(0)" : "translateX(-20px)"};
  transition: opacity 0.3s ease-in-out, transform 0.5s ease-in-out;
`;
