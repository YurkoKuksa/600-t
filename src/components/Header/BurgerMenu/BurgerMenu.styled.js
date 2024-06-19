import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MainModalBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 80vw;
  height: 100vh;
  padding: 50px 35px 20px 40px;
  background-color: #fff;
  z-index: 999;
  display: flex;
  flex-grow: 1;
  flex-direction: column;

  transform: ${({ open }) => (open ? " translateX(0)" : " translateX(100%)")};

  transition: transform 300ms ease-in-out;

  box-shadow: 0px 1px 6px 0px rgba(46, 47, 66, 0.08),
    0px 1px 1px 0px rgba(46, 47, 66, 0.16),
    0px 2px 1px 0px rgba(46, 47, 66, 0.08),
    inset 0 0 10px 5px rgba(0, 0, 0, 0.3);

  @media screen and (min-width: 360px) {
    padding: 50px 35px 10px 40px;
  }

  @media screen and (min-width: 375px) {
    padding: 50px 35px 15px 40px;
  }
  @media screen and (min-width: 384px) {
    padding: 50px 35px 40px 40px;
  }
`;

export const MainTitle = styled.h1`
  font-size: 16px;

  @media screen and (min-width: 360px) {
    font-size: 18px;
  }

  @media screen and (min-width: 375px) {
    font-size: 20px;
  }

  @media screen and (min-width: 384px) {
    font-size: 22px;
  }

  @media screen and (min-width: 576px) {
    font-size: 2em;
  }
`;

export const LogoPicture = styled.img`
  width: 28px;
  height: 28px;

  @media screen and (min-width: 360px) {
    width: 32px;
    height: 32px;
  }
  @media screen and (min-width: 412px) {
    width: 40px;
    height: 40px;
  }

  @media screen and (min-width: 576px) {
  }
`;

export const TitleBox = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  background-color: lightgrey;
  margin: 10px 0;
`;

export const MainPicture = styled.img`
  width: 50px;
  position: absolute;
  top: 120px;
  right: 8%;

  @media screen and (min-width: 360px) {
    width: 60px;
    right: 10%;
  }

  @media screen and (min-width: 384px) {
    right: 8%;
  }

  @media screen and (min-width: 412px) {
    width: 80px;
    top: 120px;
    right: 10%;
  }
`;

export const ExtraPicture = styled.img`
  width: 90px;
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: 360px) {
    width: 100px;
  }

  @media screen and (min-width: 384px) {
    width: 120px;
  }
`;

export const LinkStyle = styled(NavLink)`
  display: block;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.11;
  transition: font-weight 0.3s ease, color 0.3s ease;

  &.active {
    color: #0e07c9;
    font-weight: 800;
    letter-spacing: 2;
    text-shadow: #72a0c1;
  }

  @media screen and (min-width: 360px) {
    font-size: 18px;
  }

  @media screen and (min-width: 384px) {
    font-size: 22px;
    margin-bottom: 28px;
  }

  @media screen and (min-width: 576px) {
    font-size: 26px;
  }
`;

export const Navigator = styled.nav`
  margin: 20px 0;
  flex-grow: 1;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  height: 24px;
  width: 24px;

  border-radius: 50%;
  /* background-color: #2e2f42; */
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 576px) {
  }
`;

export const ImgSvg = styled.img`
  width: 8px;
  height: 8px;

  @media screen and (min-width: 576px) {
  }
`;

export const UlContacts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;

  justify-content: space-around;
  align-items: flex-start;

  margin: 0 auto 15px;

  @media screen and (min-width: 576px) {
    gap: 10px;
    width: 280px;
    margin: 0 auto 20px;
  }
`;

export const LiContacts = styled.li`
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.02em;
  margin-bottom: 5px;

  @media screen and (min-width: 360px) {
    font-size: 14px;
  }

  @media screen and (min-width: 412px) {
    font-size: 18px;
  }
  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
`;

export const PhoneLink = styled.a`
  color: #4d5ae5;

  text-transform: capitalize;

  @media screen and (min-width: 412px) {
    font-size: 18px;
  }
  @media screen and (min-width: 576px) {
    font-size: 20px;
  }
`;

export const EmailLink = styled.a`
  color: #434455;
`;
