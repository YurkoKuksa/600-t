import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainBox = styled.div`
  margin: 2px;
  padding: 20px 10px;

  width: auto;
  min-width: 200px;

  background-color: yellow;
  position: relative;
`;

export const LinkStyle = styled(Link)`
  display: block;
`;

export const Navigator = styled.nav`
  position: sticky;
  top: 0;
`;
