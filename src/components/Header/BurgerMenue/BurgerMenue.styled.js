import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MainModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 50px 35px 40px 40px;
  background-color: #fff;
  z-index: 999;
  display: flex;
  flex-direction: column;

  transform: ${({ open }) => (open ? " translateX(0)" : " translateX(100%)")};

  transition: transform 250ms ease-in-out;

  box-shadow: 0px 1px 6px 0px rgba(46, 47, 66, 0.08),
    0px 1px 1px 0px rgba(46, 47, 66, 0.16),
    0px 2px 1px 0px rgba(46, 47, 66, 0.08);

  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
`;

export const LinkStyle = styled(NavLink)`
  display: block;
  margin-bottom: 16px;
  font-size: 18px;
  transition: font-weight 0.3s ease, color 0.3s ease;

  /* &:hover {
   
  } */

  &.active {
    /* color: #0a2161; */
    color: #cce4fc;
    font-weight: 600;
    /* &:hover {
      color: #1f4fd1;
    } */
  }
`;

export const Navigator = styled.nav`
  position: sticky;
  top: 20px;
  margin: 20px auto;
`;
