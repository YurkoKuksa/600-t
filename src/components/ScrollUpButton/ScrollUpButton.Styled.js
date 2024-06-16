import styled from "styled-components";

export const ScrollUpPic = styled.img`
  fill: white;
`;

// export const ScrollButton = styled.button`
//   position: fixed;
//   bottom: ${(props) => (props.isVisible ? "54px" : "0px")};
//   right: 20px;
//   opacity: ${(props) => (props.isVisible ? "1" : "0")};
//   transition: opacity 0.3s ease, bottom 0.3s ease;
// `;
export const ScrollButton = styled.button`
  position: fixed;
  bottom: ${(props) => (props.isVisible ? "54px" : "-100px")};
  right: 20px;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: opacity 0.3s ease, bottom 0.3s ease;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 990; /* Ensure it appears above other content */
  padding: 10px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5); /* Optional: for better visibility */
`;
