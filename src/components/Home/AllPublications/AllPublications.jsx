import {
  Description,
  ImgBox,
  MainBox,
  Title,
  TitleBox,
} from "./AllPublications.styled";
import interestingChemistryBook from "../../../assets/images/exp.jpg";

const AllPublications = () => {
  return (
    <MainBox>
      <ImgBox>
        <img src={interestingChemistryBook} alt="Цікава хімія" width={300} />
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
