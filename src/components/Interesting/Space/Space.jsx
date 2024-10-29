import {
  ListWrapper,
  MainBox,
  Paragraph,
  ScrollSpot,
  Title,
} from "../Interesting.styled";
import AOS from "aos";
import "aos/dist/aos.css";

import space from "../../../assets/data/interesting/space.json";

AOS.init();
const Space = () => {
  return (
    <MainBox data-aos="fade-down" data-aos-duration="800">
      <ScrollSpot id="scroll-section"> </ScrollSpot>
      <ul>
        {space.map(({ title, paragraph }, index) => (
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

export default Space;
