import {
  ListWrapper,
  Paragraph,
  ScrollSpot,
  Title,
  MainBox,
} from "../Interesting.styled";

import AOS from "aos";
import "aos/dist/aos.css";

import inorganic from "../../../assets/data/interesting/inorganic.json";

AOS.init();
const Inorganic = () => {
  return (
    <MainBox data-aos="fade-down" data-aos-duration="800">
      <ScrollSpot id="scroll-section"> </ScrollSpot>
      <ul>
        {inorganic.map(({ title, paragraph }, index) => (
          <ListWrapper key={index}>
            <div>
              <Title>{title}</Title>
              <Paragraph>
                {paragraph.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < paragraph.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </Paragraph>
            </div>
          </ListWrapper>
        ))}
      </ul>
    </MainBox>
  );
};

export default Inorganic;
