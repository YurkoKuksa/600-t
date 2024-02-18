import { BackLink, TextInfo, Wrapper, MainTitle } from "./NotFound.styled";

const NotFound = () => {
  return (
    <Wrapper>
      <MainTitle>404</MainTitle>

      <TextInfo>Сторінку незнайдено</TextInfo>
      <BackLink to="/">Повернутися на головну</BackLink>
    </Wrapper>
  );
};

export default NotFound;
