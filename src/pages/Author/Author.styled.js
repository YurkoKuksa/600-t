import styled from "styled-components";

import tasks from "../../assets/images/chemistry91.png";

export const MainBox = styled.div`
  padding: 3px;
  background-color: #c0c0c0;
  max-width: 100%;
  margin: 0;
  border: 1px solid cornflowerblue;
  flex-grow: 1;
  box-shadow: 0px 1px 6px 0px rgba(46, 47, 66, 0.08),
    0px 1px 1px 0px rgba(46, 47, 66, 0.16),
    0px 2px 1px 0px rgba(46, 47, 66, 0.08);
  display: flex;
`;

export const AuthBox = styled.div`
  border-radius: 10px;
  background-image: linear-gradient(
      rgba(241, 241, 241, 0.4),
      rgba(241, 241, 241, 0.4)
    ),
    url(${tasks});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 300px;
  flex-grow: 1;
  padding: 20px;
  border: 1px solid cornflowerblue;
  display: flex;
  gap: 20px;
  position: relative;
`;

export const PictureBox = styled.div`
  flex-shrink: 0;
`;

export const PortretPicture = styled.img`
  border-radius: 10px;
`;

export const MainTitle = styled.h1`
  font-family: "Caveat";
  margin-bottom: 30px;
  color: #808080;
  font-size: 70px;
  text-align: center;
`;

export const Paragraph = styled.p`
  line-height: 1.6;
  letter-spacing: 0.04em;
  font-weight: 500;
  color: #6b6363;
  font-size: 18px;
  text-indent: 50px;
`;

export const DecorPicture = styled.img`
  position: absolute;
  bottom: 0;
  left: 55%;
  transform: translateX(-50%);
  width: 500px;
`;
