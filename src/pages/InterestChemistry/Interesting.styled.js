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
  justify-content: flex-end;
  font-size: 40px;
  font-weight: 700;
  color: #0a2161;

  @media screen and (min-width: 576px) {
    font-size: 40px;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 1707px) {
    /* font-size: 100px; */
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
  font-size: 18px;
  text-indent: 50px;
  padding: 0 50px;
  margin-bottom: 20px;

  @media screen and (min-width: 576px) {
    text-indent: 50px;
    font-size: 18px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
  }

  @media screen and (min-width: 2560px) {
    font-size: 24px;
  }

  /* outline: 1px solid green; */
`;

export const CustomNavLink = styled(NavLink)`
  display: block;
  font-size: 18px;
  transition: font-weight 0.3s ease, color 250ms ease;
  color: #0a2161;
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

  @media screen and (min-width: 1856px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 22px;
  }

  // @media screen and (min-width: 2048px){font-size:24px;}

  @media screen and (min-width: 2560px) {
    font-size: 26px;
  }
`;

export const WrapBox = styled.div`
  display: flex;

  /* outline: 1px solid green; */
`;

export const UlWrap = styled.ul`
  display: flex;
  row-gap: 10px;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  background-color: rgb(142, 143, 153, 0.4);
  padding: 15px;
  margin: 30px 0;
  position: relative;
  z-index: 990;
  width: 220px;

  // @media screen and (min-width: 1856px){width: 220px;}
  //
  @media screen and (min-width: 1920px) {
    width: 270px;
  }
  //
  // @media screen and (min-width: 2048px){width: 280px;}
  //
  @media screen and (min-width: 2560px) {
    width: 320px;
  }

  /* outline: 1px solid green; */
`;

export const LiWrap = styled.li`
  &:not(:last-child) {
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1856px) {
    margin-bottom: 26px;
  }

  @media screen and (min-width: 1920px) {
    margin-bottom: 28px;
  }

  @media screen and (min-width: 2560px) {
    margin-bottom: 30px;
  }
`;

export const TableImg = styled.img`
  display: ${({ $active }) => ($active ? "none" : "block")};

  position: absolute;
  top: 65%;
  left: 55%;
  transform: translate(-50%, -50%);
  opacity: 0.4;
  width: 1000px;
  z-index: 1;

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

/* OUTLINE */
/* outline: 1px solid green; */
// @media screen and (min-width: 360px){}

// для galaxy s22
// @media screen and (min-width: 360px) and (min-height: 638px) {}
// @media screen and (min-width: 375px){}

// iphone8
// @media screen and (min-width: 375px) and (min-height: 526px) {}

// @media screen and (min-width: 384px){}
// @media screen and (min-width: 412px){}
// iphone15 Plus
// @media screen and (min-width: 430px){}
// @media screen and (min-width: 576px){}
// @media screen and (min-width: 768px){}
// @media screen and (min-width: 992px){}
// @media screen and (min-width: 1200px){}
// @media screen and (min-width: 1440px){}
//
// @media screen and (min-width: 1707px){}
// @media screen and (min-width: 1792px){}
// @media screen and (min-width: 1856px){}
//
// @media screen and (min-width: 1920px){}
//
// @media screen and (min-width: 2048px){}
//
// @media screen and (min-width: 2560px){}
