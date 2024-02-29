import { BackLink, TextInfo, Wrapper, MainTitle } from "./NotFound.styled";
import flask from "../../assets/images/chemistry10.png";

const NotFound = () => {
  return (
    <Wrapper>
      <MainTitle>404</MainTitle>

      <TextInfo>Сторінку незнайдено</TextInfo>
      <BackLink to="/">На головну</BackLink>

      <img src={flask} alt="хімічимо" />
    </Wrapper>
  );
};

export default NotFound;
