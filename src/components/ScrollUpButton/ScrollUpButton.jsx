import { useEffect, useRef, useState } from "react";

import arrowup from "../../assets/svg/double_arrow_up.svg";
import { ScrollButton, ScrollUpPic } from "./ScrollUpButton.Styled";

export const ScrollUpBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
      console.log("scrollY:", scrollYRef.current); // Debug scroll position
      setIsVisible(scrollYRef.current > 300);
      console.log("isVisible:", scrollYRef.current > 300); // Debug visibility condition
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClickBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollButton isVisible={isVisible} type="button" onClick={handleClickBtn}>
      <ScrollUpPic src={arrowup} alt="стрілочка вгору" size={24} />
    </ScrollButton>
  );
};
