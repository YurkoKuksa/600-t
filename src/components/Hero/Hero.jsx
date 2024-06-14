import AOS from "aos";
import "aos/dist/aos.css";

import {
  StyledBox,
  MainTitle,
  Flask,
  InfoBtn,
  ListWrapper,
  InfoBtnMain,
  MainWrapper,
} from "./Hero.styled";
import flask from "../../assets/images/chemistry88.png";
import { useState } from "react";

// import BackDrop from "../Header/BackDrop/BackDrop";
import Modal from "../Modal/Modal";
AOS.init();
export const Hero = ({ handleShowAboutBook, handleShowOther }) => {
  // const [isMenuOpen, setIsMenuOpen] = useState(() => false);

  // const toggleMenu = () => {
  //   setIsMenuOpen((prevState) => !prevState);
  // };

  // const closeModal = () => {
  //   setIsMenuOpen(false);
  // };

  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <StyledBox>
      <MainTitle data-aos="zoom-in" data-aos-duration="800">
        600 Задач з хімії
      </MainTitle>
      <Flask src={flask} alt="chemical flask" />

      <MainWrapper>
        <ListWrapper>
          <li>
            <InfoBtnMain type="button" onClick={toggleModal}>
              Отримати книгу
            </InfoBtnMain>
          </li>
          <li>
            <InfoBtn type="button" onClick={handleShowAboutBook}>
              Дізнатись більше
            </InfoBtn>
          </li>
          <li>
            <InfoBtn type="button" onClick={handleShowOther}>
              Інші публікації
            </InfoBtn>
          </li>
        </ListWrapper>
      </MainWrapper>
      {isOpenModal && <Modal toggleModal={toggleModal} />}
    </StyledBox>
  );
};
