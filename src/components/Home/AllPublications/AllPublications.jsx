import {
  Description,
  ImgBox,
  MainBox,
  Title,
  TitleBox,
} from "./AllPublications.styled";
import interestingChemistryBook from "../../../assets/images/exp.jpg";
import { ScrollSpotHome } from "../SectionTwo/SectionTwoStyled";

const AllPublications = () => {
  return (
    <MainBox>
      <ScrollSpotHome id="scroll-section-two"> </ScrollSpotHome>
      <ImgBox>
        <img src={interestingChemistryBook} alt="Цікава хімія" />
      </ImgBox>

      <TitleBox>
        <Title>Інші видання</Title>

        <Description>
          З 1998 року, окрім основного підручника "600 Задач з Хімії", також
          видавалися зошити для практичних та лабораторних робіт з хімії для
          учнів. Ці додаткові матеріали були спеціально розроблені з урахуванням
          потреб освітнього процесу, дозволяючи вчителям і учням ефективно
          впроваджувати практичні аспекти навчання прямо на уроках. Такий підхід
          значно полегшив асиміляцію знань та забезпечив більш глибоке розуміння
          хімічних концепцій.
        </Description>
      </TitleBox>
    </MainBox>
  );
};
export default AllPublications;
