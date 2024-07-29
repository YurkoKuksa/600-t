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
const Household = () => {
  return (
    <MainBox data-aos="fade-down" data-aos-duration="800">
      <ScrollSpot id="scroll-section"> </ScrollSpot>
      <ul>
        <ListWrapper>
          <Title>
            Оцет для чищення вікон C<sub>2</sub>H<sub>4</sub>O<sub>2</sub>
          </Title>
          <Paragraph>
            Змішуючи оцет з водою, можна отримати ефективний засіб для чищення
            вікон та дзеркал, оскільки оцет розчиняє жир та видаляє плями
          </Paragraph>
        </ListWrapper>

        <ListWrapper>
          <Title>
            Сода для поглинання запахів NaHCO<sub>3</sub>
          </Title>
          <Paragraph>
            Сода (Гідрогенкарбонат) використовується поглинання запахів у
            домашніх умовах. Вона може взаємодіяти з різними запаховими
            частинками, нейтралізуючи їх та зменшуючи неприємний аромат.
            Наприклад, сода використовується для виведення неприємних запахів з
            холодильника чи взуттєвої шафи, забезпечуючи свіже та чисте
            середовище в домі.
          </Paragraph>
        </ListWrapper>
        <ListWrapper>
          <Title>Ефект соди в пожежогасінні</Title>
          <Paragraph>
            Сода (бікарбонат натрію) використовується в огнегасінні через
            хімічну реакцію, що вивільняє CO<sub>2</sub>, який загасає пожежу
            шляхом виведення кисню та поглинання тепла.
          </Paragraph>
        </ListWrapper>
        <ListWrapper>
          <Title>
            Лимонна кислота проти вапняних відкладень C<sub>6</sub>H<sub>8</sub>
            O<sub>7</sub>
          </Title>
          <Paragraph>
            Лимонна кислота часто використовується для видалення вапняних
            відкладень на кранах і поверхнях ванни. Вона реагує з вапном,
            утворюючи розчинні солі і полегшуючи прибирання.
          </Paragraph>
        </ListWrapper>

        <ListWrapper>
          <Title>
            Пероксид водню для вибілювання зубів H<sub>2</sub>O<sub>2</sub>
          </Title>
          <Paragraph>
            Гідрогенований пероксид використовується у складі засобів для
            вибілювання зубів. Він розкладається, виділяючи кисень, який
            проникає у порожнини зубів і видаляє плями.
          </Paragraph>
        </ListWrapper>

        <ListWrapper>
          <Title>Пекучість перцю</Title>
          <Paragraph>
            Остроту перцю визначає хімічна речовина, відома як капсаїцин. Вона
            взаємодіє з рецепторами в ротовій порожнині, спричиняючи відчуття
            гарячості.
          </Paragraph>
        </ListWrapper>

        <ListWrapper>
          <Title>Хімія в милах</Title>
          <Paragraph>
            Традиційні милозамінники, такі як натрієві солі жирних кислот,
            роблять поверхні гладкими та допомагають розчиняти бруд.
          </Paragraph>
        </ListWrapper>
        <ListWrapper>
          <Title>Бакіль для відбілювання</Title>
          <Paragraph>
            Багато відбілюючих засобів містять хімічні речовини, такі як
            пероксид водню або перкарбамід. Ці речовини взаємодіють з плямами і
            роблять їх менш помітними.
          </Paragraph>
        </ListWrapper>
      </ul>
    </MainBox>
  );
};

export default Household;
