import { AsidePic, LinkStyle, MainBox, Navigator } from "./Aside.styled";
import atom from "../../assets/images/chemistry90.png";

const Aside = () => {
  return (
    <MainBox>
      <AsidePic src={atom} alt="atom" width={80} height={80} />
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
    </MainBox>
  );
};

export default Aside;
