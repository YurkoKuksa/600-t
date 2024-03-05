import { LinkStyle, MainModalBox, Navigator } from "./BurgerMenue.styled";

export const BurgerMenue = ({ close, open }) => {
  //   const closeM = () => {
  //     close();
  //   };

  return (
    <MainModalBox open={open}>
      <button type="button" onClick={close}>
        Close
      </button>
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
    </MainModalBox>
  );
};

// useEffect(() => {
//   if (isMenuOpen) {
//     document.body.classList.add(style.noScroll);
//   } else {
//     document.body.classList.remove(style.noScroll);
//   }
//   return () => {
//     document.body.classList.remove(style.noScroll);
//   };
// }, [isMenuOpen]);

// const handleBackdrop = () => {
//   toggleMenu();
// };

// useEffect(() => {
//   const handleKeyPress = (event) => {
//     if (event.key === "Escape") {
//       closeMenu();
//     }
//   };

//   document.addEventListener("keydown", handleKeyPress);

//   return () => {
//     document.removeEventListener("keydown", handleKeyPress);
//   };
// }, [isMenuOpen, closeMenu]);
