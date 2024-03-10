import {
  Box,
  BurgerSvg,
  LogoLink,
  LogoWrapper,
  NameStyle,
} from "./Header.styled";
import chemistry from "../../assets/svg/chemistry.svg";
import { Link } from "react-router-dom";

// import { GlobalStyle } from "../../styles/GlobalStyle";

import burger from "../../assets/svg/burger.svg";
import { useState } from "react";
import { BurgerMenue } from "./BurgerMenue/BurgerMenue";
import BackDrop from "./BackDrop/BackDrop";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(() => false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeModal = () => {
    setIsMenuOpen(false);
  };
  // { <GlobalStyle $isopen={isMenuOpen} /> }
  return (
    <Box>
      <LogoWrapper>
        <Link to="/">
          <img src={chemistry} alt="main logo" width={40} height={40} />
        </Link>
        <LogoLink>Chemistry tasks</LogoLink>
      </LogoWrapper>
      <NameStyle>Кукса С.П.</NameStyle>
      <button onClick={toggleMenu}>
        <BurgerSvg src={burger} alt="бургер меню" />
      </button>
      {isMenuOpen && <BackDrop close={closeModal} />}

      <BurgerMenue close={closeModal} open={isMenuOpen} />
    </Box>
  );
};

export default Header;

// useEffect(() => {
//   const handleScroll = () => {
//     if (isMenuOpen) {
//       document.body.classList.add("noScroll");
//     } else {
//       document.body.classList.remove("noScroll");
//     }
//   };

//   handleScroll();

//   return () => {
//     document.body.classList.remove("noScroll");
//   };
// }, [isMenuOpen]);

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

//   window.addEventListener("resize", handleResize);

//   return () => window.removeEventListener("resize", handleResize);
// }, [isMenuOpen, toggleMenu, isSmallViewport]);
