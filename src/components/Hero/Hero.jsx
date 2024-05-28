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
import { Modal } from "../Modal/Modal";
import BackDrop from "../Header/BackDrop/BackDrop";
AOS.init();
export const Hero = ({ handleShowAboutBook, handleShowOther }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(() => true);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeModal = () => {
    setIsMenuOpen(false);
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
            <InfoBtnMain type="button" onClick={toggleMenu}>
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
      {isMenuOpen && <BackDrop close={closeModal} />}
      {/* <Modal close={closeModal} open={isMenuOpen} /> */}
    </StyledBox>
  );
};
