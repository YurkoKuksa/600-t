import { LinkStyle, MainBox, Navigator } from "./Aside.styled";

const Aside = () => {
  return (
    <MainBox>
      <Navigator>
        <LinkStyle to="/">Головна</LinkStyle>
        <LinkStyle to="/biography">Автор</LinkStyle>
        <LinkStyle to="/interesting">Цікава хімія</LinkStyle>

        <LinkStyle to="/contacts">Контакти</LinkStyle>
      </Navigator>
    </MainBox>
  );
};

export default Aside;
