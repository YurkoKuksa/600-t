import { Box, Section } from "./Home.styled";
import { Hero } from "../../components/Hero/Hero";
import SectionTwo from "../../components/Home/SectionTwo/SectionTwo";
import { useEffect, useState } from "react";

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
      setScrollToSection(false);
    }
  }, [scrollToSection]);

  return (
    <Box>
      <Section>
        <Hero
          handleShowAboutBook={handleShowAboutBook}
          handleShowOther={handleShowOther}
        />
      </Section>
      <SectionTwo
        showAboutBook={showAboutBook}
        other={other}
        id="scroll-section"
      />
    </Box>
  );
};

export default Home;
