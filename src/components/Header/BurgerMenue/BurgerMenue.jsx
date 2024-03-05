import React, { useEffect } from "react";
import { MainModalBox } from "./BurgerMenue.styled";
import Navigation from "../../Navigation/Navigation";

export const BurgerMenue = ({ close, open }) => {
  //   const closeM = () => {
  //     close();
  //   };

  return (
    <MainModalBox open={open}>
      <button type="button" onClick={close}>
        Close
      </button>
      <Navigation />
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
