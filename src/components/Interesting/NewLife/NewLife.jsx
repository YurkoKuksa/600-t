import {
  ListWrapper,
  MainBox,
  Paragraph,
  ScrollSpot,
  Title,
  Description,
} from "../Interesting.styled";

import AOS from "aos";
import "aos/dist/aos.css";

import newlife from "../../../assets/data/interesting/newlife.json";

AOS.init();
const NewLife = () => {
  return (
    <MainBox data-aos="fade-down" data-aos-duration="800">
      <ScrollSpot id="scroll-section"> </ScrollSpot>
      <Description>
        Теоретично існує кілька концепцій щодо можливих хімічних баз для
        виникнення життя. Ці ідеї висувають гіпотетичні сценарії, які можуть
        призвести до розвитку живих систем.
      </Description>
      <ul>
        {newlife.map(({ title, paragraph }, index) => (
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
export default NewLife;
