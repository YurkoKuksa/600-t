import { useEffect, useState } from "react";
import {
  BackGraound,
  Book,
  CloseMenuBtn,
  GoogleForm,
  MainModalBox,
  ModalCloseButton,
  ListStyled,
  SvgItem,
  SpanWrapper,
  ContactLink,
  List,
  DownloadFile,
  SpanDownload,
  DownLoadFile,
} from "./Modal.styled";

import cover from "../../assets/images/600.jpg";
import phone from "../../assets/svg/call.svg";
import mail from "../../assets/svg/mail.svg";
import closeBtn from "../../assets/svg/close.svg";
import { ImgSvg } from "../Header/BurgerMenu/BurgerMenu.styled";
import pdf from "../../assets/pdf/1.pdf";
import download from "../../assets/svg/download.svg";

const Modal = ({ toggleModal }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // Затримка перед зміною стану (0.1 секунди)
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.code === "Escape") {
        toggleModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [toggleModal]);

  const handleClickOnBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return (
    <BackGraound onClick={handleClickOnBackdrop} isVisible={isVisible}>
      <MainModalBox isVisible={isVisible}>
        <CloseMenuBtn type="button" onClick={toggleModal}>
          <ImgSvg src={closeBtn} alt="закрити" />
        </CloseMenuBtn>

        <Book src={cover} alt="600 задач з хімії" />
        <GoogleForm href="https://forms.gle/aoJP4LLRBtXmeS2dA" target="_blank">
          Замовити книгу
        </GoogleForm>

        <DownLoadFile href={pdf} target="_blank" rel="noopener noreferrer">
          <DownloadFile src={download} alt="завантажити" download="Зракзок" />
          <SpanDownload>&nbsp; зразок</SpanDownload>
        </DownLoadFile>

        <List>
          <ListStyled>
            <ContactLink href="mailto:kuksasergei@ukr.net">
              <SpanWrapper>
                <SvgItem src={mail} alt="локація" /> &nbsp;
              </SpanWrapper>
              kuksasergey55@gmail.com
            </ContactLink>
          </ListStyled>

          <ListStyled>
            <ContactLink href="tel:+380968103053">
              <SpanWrapper>
                <SvgItem src={phone} alt="локація" /> &nbsp;
              </SpanWrapper>
              +38 (096) 810-30-53
            </ContactLink>
          </ListStyled>
        </List>

        <ModalCloseButton type="button" onClick={toggleModal}>
          Закрити
        </ModalCloseButton>
      </MainModalBox>
    </BackGraound>
  );
};
export default Modal;
