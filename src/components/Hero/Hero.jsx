import {
  StyledBox,
  MainTitle,
  Flask,
  InfoBtn,
  ListWrapper,
} from "./Hero.styled";
import flask from "../../assets/images/chemistry88.png";

export const Hero = ({ handleShowAboutBook, handleShowOther }) => {
  return (
    <StyledBox>
      <MainTitle>600 Задач з хімії</MainTitle>
      <Flask src={flask} alt="chemical flask" />

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
    </StyledBox>
  );
};
