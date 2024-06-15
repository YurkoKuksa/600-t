import { useEffect } from "react";
import {
  BackGraound,
  Book,
  CloseMenuBtn,
  GoogleForm,
  MainModalBox,
  ModalCloseButton,
  Title,
} from "./Modal.styled";
import { Paragraph } from "../../pages/Author/Author.styled";

import cover from "../../assets/images/600.jpg";
import {
  ContactLink,
  ListStyled,
  SpanWrapper,
  SvgItem,
} from "../../pages/Contacts/Contacts.styled";

import phone from "../../assets/svg/call.svg";
import mail from "../../assets/svg/mail.svg";
import closeBtn from "../../assets/svg/close.svg";
import { ImgSvg } from "../Header/BurgerMenue/BurgerMenue.styled";

const Modal = ({ toggleModal }) => {
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
    <BackGraound onClick={handleClickOnBackdrop}>
      <MainModalBox>
        <CloseMenuBtn type="button" onClick={toggleModal}>
          <ImgSvg src={closeBtn} alt="закрити" />
        </CloseMenuBtn>

        <Title>Замовити 600 задач з хімії</Title>
        <Paragraph>
          Для замовлення книги, будь ласка, пройдіть нижче за посиланням та
          заповніть форму:
        </Paragraph>
        <GoogleForm href="https://forms.gle/aoJP4LLRBtXmeS2dA" target="_blank">
          Замовити книгу
        </GoogleForm>
        <Book src={cover} alt="600 задач з хімії" />
        <ul>
          <ListStyled>
            <ContactLink href="mailto:kuksasergei@ukr.net">
              <SpanWrapper>
                <SvgItem src={mail} alt="локація" width={20} /> &nbsp;
              </SpanWrapper>
              &nbsp; kuksasergey55@gmail.com
            </ContactLink>
          </ListStyled>

          <ListStyled>
            <ContactLink href="tel:+380968103053">
              <SpanWrapper>
                <SvgItem src={phone} alt="локація" width={22} /> &nbsp;
              </SpanWrapper>
              &nbsp; +38 (096) 810-30-53
            </ContactLink>
          </ListStyled>
        </ul>

        <ModalCloseButton type="button" onClick={toggleModal}>
          Закрити
        </ModalCloseButton>
      </MainModalBox>
    </BackGraound>
  );
};
export default Modal;
