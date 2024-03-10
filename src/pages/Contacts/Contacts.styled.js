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

export const ContactBox = styled.div`
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
  padding: 40px 20px;
  border: 1px solid cornflowerblue;

  position: relative;
`;

export const MainTitle = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  /* color: #808080; */
  justify-content: flex-end;
  font-size: 40px;
  /* екп */

  font-weight: 700;
  color: #0a2161;
`;

export const Description = styled.p`
  /* font-size: 22px;
  color: #808080;
  padding: 0 50px;
  text-indent: 50px;
  line-height: 1.6;
  margin-bottom: 20px; */

  /* екп */
  line-height: 1.6;
  letter-spacing: 0.04em;
  font-weight: 500;
  color: #6b6363;
  font-size: 18px;
  text-indent: 50px;
  padding: 0 50px;
`;

export const ContentBox = styled.div`
  flex-direction: column;
  align-items: flex-end;
  display: flex;
  gap: 20px;
`;

export const AddressWrapper = styled.address`
  width: 500px;

  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const ContactLink = styled.a`
  cursor: pointer;
`;

export const ListStyled = styled.li`
  margin-bottom: 10px;

  font-size: 18px;

  &:hover {
    color: #dbd7d7;
  }
`;

export const SpanWrapper = styled.span`
  /* color: red; */
`;

export const SvgItem = styled.img`
  display: inline-block;
`;

export const JobBox = styled.div`
  width: 500px;
  justify-content: flex-end;
  align-items: center;
`;

export const JobTitle = styled.h2`
  margin-bottom: 15px;
  color: #808080;
  font-size: 26px;
`;

export const CollageName = styled.p`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const DecorPicture = styled.img`
  position: absolute;
  top: 58%;
  left: 38%;
  transform: translate(-50%, -50%);
  opacity: 0.6;
  width: 600px;
`;
