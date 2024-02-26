import { AsidePic, LinkStyle, MainBox, Navigator } from "./Aside.styled";
import atom from "../../assets/images/chemistry90.png";

const Aside = () => {
  return (
    <MainBox>
      <AsidePic src={atom} alt="atom" width={80} height={80} />
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
