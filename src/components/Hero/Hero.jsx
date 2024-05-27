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
AOS.init();
export const Hero = ({ handleShowAboutBook, handleShowOther }) => {
  return (
    <StyledBox>
      <MainTitle data-aos="zoom-in">600 Задач з хімії</MainTitle>
      <Flask src={flask} alt="chemical flask" />

      <MainWrapper>
        <InfoBtnMain type="button" onClick={handleShowAboutBook}>
          Отримати книгу
        </InfoBtnMain>

        <ListWrapper>
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
    </StyledBox>
  );
};
