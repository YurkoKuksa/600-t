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
  padding: 20px;
  border: 1px solid cornflowerblue;

  position: relative;

  @media screen and (min-width: 576px) {
    padding: 40px 20px;
  }
`;

export const MainTitle = styled.h1`
  text-align: center;
  margin-bottom: 16px;
  justify-content: flex-end;

  font-weight: 700;
  color: #0a2161;

  @media screen and (min-width: 576px) {
    font-size: 40px;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 1707px) {
  }

  @media screen and (min-width: 1920px) {
    font-size: 50px;
  }

  @media screen and (min-width: 2560px) {
    font-size: 70px;
  }
`;

export const Description = styled.p`
  line-height: 1.6;
  letter-spacing: 0.04em;
  font-weight: 500;
  color: #6b6363;

  text-indent: 25px;
  padding: 0;
  margin-bottom: 20px;

  @media screen and (max-width: 359.98px) {
    display: none;
  }

  @media screen and (min-width: 576px) {
    text-indent: 50px;
    font-size: 18px;
    padding: 0 50px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
  }

  @media screen and (min-width: 2560px) {
    font-size: 24px;
  }
`;

export const Navig = styled.nav`
  @media screen and (max-width: 1199.98px) {
    min-width: 100%;
    background-color: rgb(142, 143, 153, 0.4);
    display: flex;
    justify-content: center;
  }
`;

export const CustomNavLink = styled(NavLink)`
  display: block;
  font-size: 18px;
  transition: font-weight 0.3s ease, color 250ms ease;
  color: #0a2161;
  font-weight: 600;

  &:hover {
    font-weight: 600;
    color: #1f4fd1;
  }

  &.active {
    font-weight: ${({ $active }) => ($active ? "700" : "600")};
    color: ${({ $active }) => ($active ? "#1f4fd1" : "#0a2161")};
    &:hover {
      font-weight: ${({ $active }) => ($active ? "700" : "600")};
      color: ${({ $active }) => ($active ? "#808080" : "#1f4fd1")};
    }
  }

  @media screen and (min-width: 1200px) {
    font-weight: 500;
    &:hover {
      font-weight: 500;
      color: #1f4fd1;
    }

    &.active {
      font-weight: ${({ $active }) => ($active ? "700" : "500")};
      color: ${({ $active }) => ($active ? "#1f4fd1" : "#0a2161")};
      &:hover {
        font-weight: ${({ $active }) => ($active ? "700" : "500")};
        color: ${({ $active }) => ($active ? "#808080" : "#1f4fd1")};
      }
    }
  }

  @media screen and (min-width: 1856px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 22px;
  }

  @media screen and (min-width: 2560px) {
    font-size: 26px;
  }
`;

export const WrapBox = styled.div`
  display: flex;

  flex-direction: column;

  row-gap: 20px;

  @media screen and (min-width: 1200px) {
    align-items: flex-start;

    flex-direction: row;
  }
`;

export const UlWrap = styled.ul`
  display: flex;
  row-gap: 10px;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;

  margin: 0;
  position: relative;
  z-index: 990;
  width: 220px;

  @media screen and (max-width: 1199.98px) {
    padding: 15px 0 15px 35px;
  }

  @media screen and (min-width: 1200px) {
    margin: 30px 0;
    padding: 15px;
    background-color: rgb(142, 143, 153, 0.4);
  }

  @media screen and (min-width: 1920px) {
    width: 300px;
    padding: 30px;
  }

  @media screen and (min-width: 2560px) {
    width: 350px;
    padding: 40px;
  }
`;

export const LiWrap = styled.li`
  &:not(:last-child) {
    margin-bottom: 24px;
    @media screen and (min-width: 1856px) {
      margin-bottom: 26px;
    }

    @media screen and (min-width: 1920px) {
      margin-bottom: 28px;
    }

    @media screen and (min-width: 2560px) {
      margin-bottom: 30px;
    }
  }
`;

export const TableImg = styled.img`
  display: ${({ $active }) => ($active ? "none" : "block")};

  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.4;
  width: 300px;
  z-index: 1;

  @media screen and (min-width: 576px) {
    width: 500px;
  }

  @media screen and (max-width: 1199.98px) {
    opacity: 0.2;
  }

  @media screen and (min-width: 1200px) {
    left: 55%;
    width: 600px;
  }

  @media screen and (min-width: 1440px) {
    width: 800px;
  }

  @media screen and (min-width: 1680px) {
    width: 1000px;
  }

  @media screen and (min-width: 1792px) {
    top: 55%;
  }

  @media screen and (min-width: 1856px) {
    top: 65%;
  }

  @media screen and (min-width: 1920px) and (min-height: 1030px) {
    top: 55%;
  }

  @media screen and (min-width: 1920px) and (min-height: 1200px) {
    top: 50%;
  }

  @media screen and (min-width: 2560px) {
    width: 1400px;
    top: 55%;
  }
`;
