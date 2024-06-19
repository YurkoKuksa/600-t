import { BackDropBox } from "./BackDrop.styled";

const BackDrop = ({ close }) => {
  const handleClickOnBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      close();
    }
  };
  return <BackDropBox onClick={handleClickOnBackdrop}></BackDropBox>;
};

export default BackDrop;
