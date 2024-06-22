import {
  ListWrapper,
  MainBox,
  Paragraph,
  ScrollSpot,
  Title,
  WrapperFormula,
} from "../Interesting.styled";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const Organic = () => {
  return (
    <MainBox data-aos="fade-down" data-aos-duration="800">
      <ScrollSpot id="scroll-section"> </ScrollSpot>
      <ul>
        <ListWrapper>
          <div>
            <Title>
              Тетраоксид дихлору
              <WrapperFormula>
                &nbsp;( Cl<sub>2</sub>O<sub>4</sub>):
              </WrapperFormula>
            </Title>
            <Paragraph>
              Ця хімічна речовина є надзвичайно нестійкою та вибуховою. Її
              цікавість полягає в тому, що вона не може існувати у звичайних
              умовах температури та тиску, тому вивчення її властивостей - це
              виклик для хіміків.
            </Paragraph>
          </div>
        </ListWrapper>

        <ListWrapper>
          <div>
            <Title>
              Повнийерин (C<sub>6</sub>H<sub>6</sub>N<sub>2</sub>)
            </Title>
            <Paragraph>
              Повнийерин використовується у вибухових речовинах. Його цікавість
              полягає у тому, що при певних умовах він може утворювати
              несподівані та дуже стійкі полімерні структури, які мають велике
              значення в матеріалознавстві.
            </Paragraph>
          </div>
        </ListWrapper>

        <ListWrapper>
          <div>
            <Title>
              Каротин (C<sub>40</sub>H<sub>56</sub>)
            </Title>
            <Paragraph>
              Каротин — це пігмент, який надає оранжевий та жовтий колір
              багатьом фруктам та овочам, таким як морква. Ця органічна сполука
              конвертується в органічний вітамін A, важливий для зору та імунної
              системи.
            </Paragraph>
          </div>
        </ListWrapper>

        <ListWrapper>
          <div>
            <Title>
              Бензол ( C<sub>6</sub>H<sub>6</sub>)
            </Title>
            <Paragraph>
              Бензол є ароматичною речовиною з круговою системою сполучень між
              атомами вуглецю. Він важливий у хімії та промисловості, а його
              структура служила основою для розвитку теорії ароматичності.
            </Paragraph>
          </div>
        </ListWrapper>

        <ListWrapper>
          <div>
            <Title>Ангел диявольського числа</Title>
            <Paragraph>
              Хімічна сполука з дуже кумедною назвою -
              "тетранітрогексаціклогексантріен" або, скорочено, "ангел
              диявольського числа." Ця сполука складається з вуглецю, азоту та
              кисню і має надзвичайно складну структуру. Цікаво те, що ця
              речовина може вибухнути, але тільки при дуже високих температурах
              або при ударі. Вона була досліджена як потенційний вибуховий
              матеріал, але через свою нестабільність не застосовується у
              практиці. Назва "ангел диявольського числа" додає загадковості цій
              хімічній сполуці.
            </Paragraph>
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
export default Organic;
