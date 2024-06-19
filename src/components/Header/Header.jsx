import {
  Box,
  BurgerSvg,
  LogiImg,
  LogoLink,
  LogoWrapper,
  NameStyle,
} from "./Header.styled";
import chemistry from "../../assets/svg/chemistry.svg";

import burger from "../../assets/svg/burger.svg";
import { useState } from "react";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import BackDrop from "./BackDrop/BackDrop";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(() => false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeModal = () => {
    setIsMenuOpen(false);
  };

  return (
    <Box>
      <LogoWrapper>
        <LogiImg to="/">
          <img src={chemistry} alt="main logo" width={40} height={40} />
        </LogiImg>
        <LogoLink>Chemistry tasks</LogoLink>
      </LogoWrapper>
      <NameStyle>Кукса С.П.</NameStyle>
      <button onClick={toggleMenu}>
        <BurgerSvg src={burger} alt="бургер меню" />
      </button>
      {isMenuOpen && <BackDrop close={closeModal} />}

      <BurgerMenu close={closeModal} open={isMenuOpen} />
    </Box>
  );
};

export default Header;

// const [isSmallViewport, setIsSmallViewport] = useState(
//   window.innerWidth <= 768
// );

// useEffect(() => {
//   const handleResize = () => {
//     setIsSmallViewport(window.innerWidth <= 768);
//     if (!isSmallViewport && isMenuOpen) {
//       toggleMenu(false); // закрити меню, якщо вікно стало більше 768px
//     }
//   };
