import {
  Box,
  BurgerSvg,
  LogoLink,
  LogoWrapper,
  NameStyle,
} from "./Header.styled";
import chemistry from "../../assets/svg/chemistry.svg";
import { Link } from "react-router-dom";

import burger from "../../assets/svg/burger.svg";
import { useState } from "react";
import { BurgerMenue } from "./BurgerMenue/BurgerMenue";
import BackDrop from "./BackDrop/BackDrop";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isSmallViewport, setIsSmallViewport] = useState(
  //   window.innerWidth <= 768
  // );
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

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

  // const handleKeyPress = (event) => {
  //   if (
  //     event.key === "Escape" ||
  //     event.key === " " ||
  //     event.key === "Enter" ||
  //     event.key === "+"
  //   ) {
  //     toggleMenu(false); // закрити меню при натисканні на Esc
  //   }
  // };

  const closeModal = () => {
    setIsMenuOpen(false);
  };

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

// const [isOpen, setIsOpen] = useState(false);
// const [modalPosition, setModalPosition] = useState(0);
// const [toggleModal, setToggleModal] = useState(false);

// useEffect(() => {
//   if (toggleModal) {
//     // Зміщення вправо, ви можете змінити це значення на власний розсуд
//     const animationFrame = requestAnimationFrame(() => {
//       setModalPosition(100);
//     });

//     return () => cancelAnimationFrame(animationFrame);
//   } else {
//     setModalPosition(0);
//   }
// }, [toggleModal]);

// const toggleModaOpen = () => {
//   setToggleModal(!toggleModal);
//   setModalPosition(100);
// };

// const closeModal = () => {
//   setToggleModal(false);
//   setModalPosition(0);
// };

// const handleModalTransition = () => {
//   if (toggleModal) {
//     // Зміщення вправо, ви можете змінити це значення на власний розсуд
//     setModalPosition(100);
//   }
// };
