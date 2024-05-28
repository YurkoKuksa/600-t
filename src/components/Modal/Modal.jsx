import { useEffect } from "react";
import { MainModalBox } from "./Modal.styled";

export const Modal = ({ close, open }) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (
        event.key === "Escape" ||
        event.key === " " ||
        event.key === "Enter" ||
        event.key === "+"
      ) {
        close();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [open, close]);

  useEffect(() => {
    if (open) {
      document.body.classList.add("noScroll");
    } else {
      document.body.classList.remove("noScroll");
    }
    return () => {
      document.body.classList.remove("noScroll");
    };
  }, [open]);

  return (
    <MainModalBox open={open}>
      Modal
      <div>Title</div>
      <form>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil iste
        optio repellat corporis labore, odit molestiae minus magni provident
        ipsa libero maxime obcaecati assumenda omnis voluptate inventore quas
        totam ab?
      </form>
      <button type="button" onClick={close}>
        Close
      </button>
    </MainModalBox>
  );
};
