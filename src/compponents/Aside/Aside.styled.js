import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainBox = styled.div`
  margin: 2px;
  padding: 20px 10px;
  /* width: 200px; */
  width: auto; /* Замініть фіксовану ширину на auto */
  min-width: 200px; /* Якщо потрібно, встановіть максимальну ширину */

  background-color: yellow;
`;

export const LinkStyle = styled(Link)`
  display: block;
`;
