import {
  ListWrapper,
  MainBox,
  Paragraph,
  ScrollSpot,
  Title,
} from "../Interesting.styled";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const Space = () => {
  return (
    <MainBox data-aos="fade-down" data-aos-duration="800">
      <ScrollSpot id="scroll-section"> </ScrollSpot>
      <ul>
        <ListWrapper>
          <div>
            <Title>Титан</Title>
            <Paragraph>
              Рідина на Титані, супутнику Сатурна, включає головним чином етан
              та метан. Титан має атмосферу, багату метаном і етаном, і ці
              речовини в основному перебувають у рідкому або газоподібному стані
              на його поверхні.
            </Paragraph>
            <Paragraph>
              На поверхні Титана є великі озера та моря, але це не водяні форми,
              як на Землі. Замість цього, ці водойми наповнені рідкими
              органічними речовинами, зокрема етаном і метаном, які можуть
              перебувати в різних станах в залежності від умов температури та
              тиску на поверхні Титана.
            </Paragraph>
            <Paragraph>
              Ймовірність існування життя на Титані, основаного на хімії метану
              та етану, зараз вважається менш імовірною порівняно з умовами на
              Землі. Це через ряд чинників, які роблять умови на Титані менш
              сприятливими для розвитку біологічних форм.
            </Paragraph>
            <Paragraph>
              Одним із ключових факторів є низькі температури на поверхні
              Титана, які становлять близько -180 градусів Цельсія (-290
              градусів Фаренгейта). На таких низьких температурах хімічні
              реакції та біохімічні процеси, які відбуваються на Землі,
              відбувалися б надто повільно або могли бути ускладнені.
            </Paragraph>
            <Paragraph>
              Крім того, умови на Титані включають високий вміст органічних
              сполук, але вони в основному є хімічною формою вуглеводнів, які
              відрізняються від біологічно активних молекул, таких як
              амінокислоти та нуклеотиди, які є ключовими для земного життя.
            </Paragraph>
            <Paragraph></Paragraph>
          </div>
        </ListWrapper>

        <ListWrapper>
          <div>
            <Title></Title>
            <Paragraph></Paragraph>
          </div>
        </ListWrapper>

        <ListWrapper>
          <div>
            <Title></Title>
            <Paragraph></Paragraph>
          </div>
        </ListWrapper>

        <ListWrapper>
          <div>
            <Title></Title>
            <Paragraph></Paragraph>
          </div>
        </ListWrapper>

        <ListWrapper>
          <div>
            <Title></Title>
            <Paragraph></Paragraph>
          </div>
        </ListWrapper>
      </ul>
    </MainBox>
  );
};

export default Space;
