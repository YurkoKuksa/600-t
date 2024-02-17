import { LinkStyle, MainBox } from "./Aside.styled";

const Aside = () => {
  return (
    <MainBox>
      <nav>
        <LinkStyle to="/">Home</LinkStyle>
        <LinkStyle to="/biography">Author</LinkStyle>
        <LinkStyle to="/interesting">Interesting facts</LinkStyle>

        <LinkStyle to="/contacts">Contacts</LinkStyle>
      </nav>
    </MainBox>
  );
};

export default Aside;
