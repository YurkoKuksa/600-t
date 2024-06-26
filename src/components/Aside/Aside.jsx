import { AsidePic, MainBox } from "./Aside.styled";
import atom from "../../assets/images/chemistry90.png";
import Navigation from "../Navigation/Navigation";

const Aside = () => {
  return (
    <MainBox>
      <AsidePic src={atom} alt="atom" />
      <Navigation />
       </MainBox>
  );
};

export default Aside;
