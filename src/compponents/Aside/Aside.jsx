import { LinkStyle, MainBox, Navigator } from "./Aside.styled";

const Aside = () => {
  return (
    <MainBox>
      <Navigator>
        <LinkStyle to="/">Home</LinkStyle>
        <LinkStyle to="/biography">Author</LinkStyle>
        <LinkStyle to="/interesting">Interesting facts</LinkStyle>

        <LinkStyle to="/contacts">Contacts</LinkStyle>
      </Navigator>
    </MainBox>
  );
};

export default Aside;
