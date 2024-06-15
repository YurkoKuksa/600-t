import AboutBook from "../AboutBook/AboutBook";
import AllPublications from "../AllPublications/AllPublications";
import { MainBox } from "./SectionTwoStyled";

const SectionTwo = ({ showAboutBook, other, id }) => {
  return (
    <MainBox>
      <div>
        {showAboutBook && <AboutBook id={id} />}
        {other && <AllPublications id={id} />}
      </div>
    </MainBox>
  );
};
export default SectionTwo;
