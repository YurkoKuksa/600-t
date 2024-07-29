import { LinkStyle, Navigator } from "./Navigation.styled";

const Navigation = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <Navigator role="navigation">
      <ul>
        <li>
          <LinkStyle to="/" onClick={scrollToTop}>
            Головна
          </LinkStyle>
        </li>
        <li>
          <LinkStyle to="/biography" onClick={scrollToTop}>
            Автор
          </LinkStyle>
        </li>
        <li>
          <LinkStyle to="/interesting" onClick={scrollToTop}>
            Цікава хімія
          </LinkStyle>
        </li>
        <li>
          <LinkStyle to="/sources" onClick={scrollToTop}>
            Ресурси
          </LinkStyle>
        </li>
        <li>
          <LinkStyle to="/contacts" onClick={scrollToTop}>
            Контакти
          </LinkStyle>
        </li>
      </ul>
    </Navigator>
  );
};

export default Navigation;
