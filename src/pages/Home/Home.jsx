import { Box } from "./Home.styled";
import { Hero } from "../../components/Hero/Hero";
import SectionTwo from "../../components/Home/SectionTwo/SectionTwo";
import { useEffect, useState } from "react";
// import { Link } from "react-scroll";
// import React, { useRef } from "react";

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
// const aboutBookRef = useRef(null);

// const handleScrollToAboutBook = () => {
//   scrollToRef(aboutBookRef);
// };
const Home = () => {
  const [showAboutBook, setShowAboutBook] = useState(false);
  const [other, setOther] = useState(false);
  const [scrollToSection, setScrollToSection] = useState(false);

  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleShowAboutBook = () => {
    setShowAboutBook((prevState) => !prevState);
    setScrollToSection(true);
    setOther(false);
  };

  const handleShowOther = () => {
    setOther((prevState) => !prevState);
    setScrollToSection(true);
    setShowAboutBook(false);
  };

  useEffect(() => {
    if (scrollToSection) {
      handleClickScroll("scroll-section");
      setScrollToSection(false); // Скинути прапорець після скролінгу
    }
  }, [scrollToSection]);

  return (
    <Box>
      <Hero
        handleShowAboutBook={handleShowAboutBook}
        handleShowOther={handleShowOther}
      />
      <SectionTwo
        showAboutBook={showAboutBook}
        other={other}
        id="scroll-section"
      />
      {/* <Link to="elementID" smooth={true} duration={500}></Link> */}
    </Box>
  );
};

export default Home;

//   const [showAboutBook, setShowAboutBook] = useState(false);
//   const [other, setOther] = useState(false);
//   // const [scrollTarget, setScrollTarget] = useState(null);

//   const handleShowAboutBook = () => {
//     setShowAboutBook(true);
//     setOther(false);
//     //scrollIntoView - для плавної прокрутки
//     // document.getElementById("yu").scrollIntoView({ behavior: "smooth" });
//     // setScrollTarget("yu");
//   };

//   const handleShowOther = () => {
//     setOther(true);
//     setShowAboutBook(false);
//     // document.getElementById("other").scrollIntoView({ behavior: "smooth" });
//     // setScrollTarget("other");
// };

//  return (
// {showAboutBook && <AboutBook />}
//         {other && <AllPublications />}
//         <hr />
//         <span id="other"></span>
//         <span id="yu"></span>
//         {scrollTarget &&
//           document.getElementById(scrollTarget) &&
//           document
//             .getElementById(scrollTarget)
//             .scrollIntoView({ behavior: "smooth" })})
