import { BackDropBox } from "./BackDrop.styled";

const BackDrop = ({ close }) => {
  return <BackDropBox onClick={close}></BackDropBox>;
};

export default BackDrop;
