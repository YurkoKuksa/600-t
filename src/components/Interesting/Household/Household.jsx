import {
  ListWrapper,
  MainBox,
  Paragraph,
  ScrollSpot,
  Title,
} from "../Interesting.styled";
import AOS from "aos";
import "aos/dist/aos.css";
import { getHouseHold } from "../../../helpers";

AOS.init();
const Household = () => {
  const houseChemistry = getHouseHold();
  return (
    <MainBox data-aos="fade-down" data-aos-duration="800">
      <ScrollSpot id="scroll-section"> </ScrollSpot>

      <ul>
        {houseChemistry.map(({ title, paragraph }, index) => (
          <ListWrapper key={index}>
            <Title>{title}</Title>
            <Paragraph>{paragraph}</Paragraph>
          </ListWrapper>
        ))}
      </ul>
    </MainBox>
  );
};

export default Household;
