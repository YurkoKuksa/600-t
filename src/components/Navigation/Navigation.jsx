import { LinkStyle, Navigator } from "./Navigation.styled";

const Navigation = () => {
  return (
    <Navigator role="navigation">
      <ul>
        <li>
          <LinkStyle to="/">Головна</LinkStyle>
        </li>
        <li>
          <LinkStyle to="/biography">Автор</LinkStyle>
        </li>
        <li>
          <LinkStyle to="/interesting">Цікава хімія</LinkStyle>
        </li>
        <li>
          <LinkStyle to="/contacts">Контакти</LinkStyle>
        </li>
      </ul>
    </Navigator>
  );
};

export default Navigation;
