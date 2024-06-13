import { useEffect } from "react";
import {
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

export const Modal = ({ close, open }) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (
        event.key === "Escape" ||
        event.key === " " ||
        event.key === "Enter" ||
        event.key === "+"
      ) {
        close();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.body.style.overflow = "auto";
    };
  }, [open, close]);

  // useEffect(() => {
  //   if (open) {
  //     document.body.classList.add("noScroll");
  //   } else {
  //     document.body.classList.remove("noScroll");
  //   }
  //   return () => {
  //     document.body.classList.remove("noScroll");
  //   };
  // }, [open]);

  const handleClickOnBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      close();
    }
  };

  return (
    <MainModalBox open={open}>
      <CloseMenuBtn type="button" onClick={handleClickOnBackdrop}>
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
            +38 (096) 810-30-53
          </ContactLink>
        </ListStyled>
      </ul>
      <ModalCloseButton type="button" onClick={close}>
        Закрити
      </ModalCloseButton>
    </MainModalBox>
  );
};
