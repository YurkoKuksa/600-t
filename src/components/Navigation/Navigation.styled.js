import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LinkStyle = styled(NavLink)`
  display: block;
  margin-bottom: 16px;
  font-size: 18px;
  transition: font-weight 0.3s ease, color 0.3s ease;

  &:hover {
    color: #cce4fc;
  }

  &.active {
    color: #0a2161;
    font-weight: 600;
    &:hover {
      color: #1f4fd1;
    }
  }

  @media screen and (min-width: 1856px) {
    font-size: 20px;
    margin-bottom: 18px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 22px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 2560px) {
    font-size: 26px;
    margin-bottom: 24px;
  }
`;

export const Navigator = styled.nav`
  position: sticky;
  top: 20px;
  margin: 20px auto;
`;
