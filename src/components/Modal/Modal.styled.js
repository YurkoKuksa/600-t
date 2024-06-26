import styled from "styled-components";

export const BackGraound = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isVisible",
})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(46, 47, 66, 0.4);

  z-index: 998;
  opacity: 1;
  pointer-events: initial;
  visibility: visible;
  backdrop-filter: blur(8px);

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
`;

export const MainModalBox = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isVisible",
})`
  padding: 12px 0;
  width: 260px;

  background-color: #fff;
  position: fixed;
  left: 50%;
  top: 54%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  transition: transform 300ms ease-in-out;
  box-shadow: 0px 1px 6px 0px rgba(46, 47, 66, 0.08),
    0px 1px 1px 0px rgba(46, 47, 66, 0.16),
    0px 2px 1px 0px rgba(46, 47, 66, 0.08),
    inset 0 0 10px 5px rgba(0, 0, 0, 0.3);

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transform: ${({ isVisible }) =>
    isVisible
      ? "translate(-50%, -50%) scale(1)"
      : "translate(-50%, -50%) scale(0.5)"};
  transition: opacity 0.3s ease-in-out, transform 0.5s ease-in-out;

  @media screen and (min-width: 360px) {
    padding: 24px 0;
    width: 330px;
    top: 53%;
  }

  @media screen and (min-width: 360px) and (max-height: 638px) {
    padding: 14px 0;
    width: 300px;
    top: 53%;
  }

  @media screen and (min-width: 375px) and (min-height: 526px) {
    padding: 14px 0 18px;
    width: 320px;
    top: 54%;
  }

  @media screen and (min-width: 384px) {
    padding: 32px 0;
    width: 355px;
    top: 52%;
  }
  @media screen and (min-width: 412px) {
    width: 390px;
    top: 53%;
    padding: 24px 0;
  }

  @media screen and (min-width: 768px) {
    width: 460px;
    padding: 32px 0;
    top: 50%;
  }

  @media screen and (min-width: 992px) {
    padding: 24px 0;
    width: 440px;
  }

  @media screen and (min-width: 1440px) {
    width: 550px;
  }

  @media screen and (min-width: 1920px) {
  }
`;

export const Book = styled.img`
  margin: 5px auto 10px;
  width: 130px;

  @media screen and (min-width: 360px) {
    width: 200px;
  }

  @media screen and (min-width: 360px) and (max-height: 638px) {
    width: 130px;
  }

  @media screen and (min-width: 375px) and (min-height: 526px) {
    width: 160px;
  }
  @media screen and (min-width: 384px) {
    width: 225px;
  }

  @media screen and (min-width: 412px) {
    width: 260px;
  }

  @media screen and (min-width: 576px) {
    width: 200px;
  }

  @media screen and (min-width: 768px) {
    width: 280px;
    margin: 5px auto 20px;
  }

  @media screen and (min-width: 992px) {
    width: 200px;
  }

  @media screen and (min-width: 1200px) {
    margin: 0 auto 15px;
  }

  @media screen and (min-width: 1440px) {
    width: 270px;
  }
`;

export const ModalCloseButton = styled.button`
  margin: 0 auto 5px;
  width: 100px;
  padding: 5px 4px;
  font-size: 14px;
  opacity: 0.8;
  display: block;
  color: #e7e9fc;
  border: 1px solid #fff;
  background-color: #808080;
  border-radius: 8px;
  color: #fff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.3s;
  box-shadow: ${({ theme }) =>
    `${theme.shadows.button}, ${theme.shadows.inner}`};
  &:hover {
    background-color: #6f6f6f;
  }
  &:active {
    background-color: #919191;
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
  @media screen and (min-width: 412px) {
    width: 125px;
    padding: 8px 6px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 18px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1440px) {
    width: 165px;
    padding: 10px 8px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
  }

  @media screen and (min-width: 2560px) {
    font-size: 22px;
  }
`;

export const GoogleForm = styled.a`
  margin: 0 auto 15px;
  padding: 5px 0;
  border-radius: 8px;
  width: 145px;
  font-size: 14px;
  line-height: 1.6;
  letter-spacing: 0.04em;
  font-weight: 500;

  text-align: center;
  display: block;
  color: #fff;
  background-color: #1586ac;
  opacity: 0.9;

  box-shadow: ${({ theme }) =>
    `${theme.shadows.button}, ${theme.shadows.inner}`};

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s,
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #116f8e;
    transform: scale(1.05);
  }
  &:active {
    background-color: #1baad9;
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 5px 10px;
    width: 165px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
    width: 180px;
  }

  @media screen and (min-width: 1440px) {
    padding: 5px 0;
    width: 200px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
  }
  @media screen and (min-width: 2560px) {
    font-size: 22px;
  }
`;

export const CloseMenuBtn = styled.button`
  top: 8px;
  right: 8px;
  height: 16px;
  width: 16px;

  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #d5d5d5;
    transform: scale(1.15);
  }

  @media screen and (min-width: 360px) {
    top: 12px;
    right: 12px;
  }

  @media screen and (min-width: 384px) {
    top: 16px;
    right: 16px;
  }
  @media screen and (min-width: 412px) {
    height: 20px;
    width: 20px;
  }
  @media screen and (min-width: 1440px) {
    height: 24px;
    width: 24px;
  }
  @media screen and (min-width: 1920px) {
    width: 25px;
    height: 25px;
  }
  @media screen and (min-width: 2560px) {
    width: 26px;
    height: 26px;
  }
`;

export const ListStyled = styled.li`
  margin-bottom: 5px;

  font-size: 14px;

  &:hover {
    color: #808080;
  }
  @media screen and (min-width: 360px) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1920px) {
    font-size: 20px;
  }

  @media screen and (min-width: 2560px) {
    font-size: 22px;
  }
`;

export const SvgItem = styled.img`
  display: inline;
  margin: 0;
  width: 14px;
  @media screen and (min-width: 384px) {
    width: 16px;
  }

  @media screen and (min-width: 768px) {
    width: 17px;
    height: 17px;
  }
  @media screen and (min-width: 1200px) {
    width: 18px;
    height: 18px;
  }
  @media screen and (min-width: 1920px) {
    width: 19px;
    height: 19px;
  }
  @media screen and (min-width: 2560px) {
    width: 20px;
    height: 20px;
  }
`;
export const SpanWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;
export const ContactLink = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;

  flex-direction: row;
  gap: 1px;
  margin: 0;
`;

export const List = styled.ul`
  width: 220px;
  margin: 0 auto 15px;

  @media screen and (max-width: 359px) {
    display: none;
  }

  @media screen and (min-width: 360px) {
    margin: 0 auto 25px;
  }

  @media screen and (min-width: 375px) and (min-height: 526px) {
    margin: 0 auto 15px;
  }

  @media screen and (min-width: 384px) {
    margin: 0 auto 30px;
  }

  @media screen and (min-width: 412px) {
    margin-bottom: 25px;
  }

  @media screen and (min-width: 768px) {
    width: 245px;
  }

  @media screen and (min-width: 992px) {
    margin-bottom: 15px;
    width: 260px;
  }

  @media screen and (min-width: 1440px) {
  }

  @media screen and (min-width: 1920px) {
    width: 300px;
  }
  @media screen and (min-width: 2560px) {
    width: 320px;
  }
`;

export const DownloadFile = styled.img`
  width: 14px;
  height: 14px;

  @media screen and (min-width: 768px) {
    width: 15px;
    height: 15px;
  }

  @media screen and (min-width: 1200px) {
    width: 16px;
    height: 16px;
  }
  @media screen and (min-width: 1920px) {
    width: 17px;
    height: 17px;
  }
  @media screen and (min-width: 2560px) {
    width: 18px;
    height: 18px;
  }
`;

export const SpanDownload = styled.span`
  font-size: 14px;

  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1920px) {
    font-size: 18px;
  }

  @media screen and (min-width: 2560px) {
    font-size: 20px;
  }
`;

export const DownLoadFile = styled.a`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media screen and (min-width: 360px) {
    margin-bottom: 25px;
  }
  @media screen and (min-width: 412px) {
    margin-bottom: 45px;
  }
`;
