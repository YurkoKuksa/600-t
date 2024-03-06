import { NavLink } from "react-router-dom";
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
  margin-bottom: 16px;

  color: #808080;

  justify-content: flex-end;
  font-size: 40px;
`;

export const Description = styled.p`
  font-size: 18px;
  color: #808080;
  padding: 0 50px;
  text-indent: 50px;
  line-height: 1.6;
  /* position: relative;
  z-index: 990;
  background-color: rgba(241, 241, 241, 0.9); */
`;

export const CustomNavLink = styled(NavLink)`
  display: block;
  font-size: 18px;
  transition: font-weight 0.3s ease, color 250ms ease;

  &:hover {
    font-weight: 500;
    color: #1f4fd1;
  }

  &.active {
    font-weight: ${({ $active }) => ($active ? "700" : "normal")};
    color: ${({ $active }) => ($active ? "#1f4fd1" : "currentColor")};
    &:hover {
      font-weight: ${({ $active }) => ($active ? "700" : "500")};
      color: ${({ $active }) => ($active ? "#808080" : "#1f4fd1")};
    }
  }
`;

export const UlWrap = styled.ul`
  display: flex;
  row-gap: 10px;
  flex-wrap: wrap;
  justify-content: space-evenly;

  background-color: #d4d2d2;
  padding: 7px 0;
  border-top: 2px double gray;
  border-bottom: 2px double gray;
  margin: 10px 0;
  position: relative;
  z-index: 990;
`;

export const LiWrap = styled.li`
  width: 190px;
`;

export const TableImg = styled.img`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.4;
  width: 1000px;
  z-index: 1;
  display: ${({ $active }) => ($active ? "none" : "block")};
`;
