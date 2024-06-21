import AOS from "aos";
import "aos/dist/aos.css";

import {
  AuthBox,
  DecorPicture,
  MainBox,
  MainTitle,
  MainWrapper,
  Paragraph,
  ParagraphList,
  PictureBox,
  PortretPicture,
} from "./Author.styled";

import Auth from "../../assets/images/portret.png";
import chem from "../../assets/images/chemistry9.png";

AOS.init();
const Author = () => {
  return (
    <MainBox>
      <AuthBox>
        <MainWrapper>
          <PictureBox>
            <PortretPicture src={Auth} alt="портрет автора" />
          </PictureBox>
          <div>
            <MainTitle>Кукса Сергій Петрович</MainTitle>
            <ParagraphList>
              <li>
                <Paragraph>
                  Відомий автор посібника «600 задач з хімії», а також «Зошити
                  для практичних робіт та лабораторних дослідів з хімії» з
                  друкованою основою.
                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  «Спеціаліст вищої категорії» та педагогічне звання
                  «Викладач-методист». У 1998 році став фіналістом обласного
                  етапу Всеукраїнського конкурсу "Учитель року" в номінації
                  «Хімія». В 2008 році нагороджений Бердичівською міською Радою
                  нагрудним знаком «За досягнення в освіті». В 2023 році МО
                  України нагороджений знаком «Василь Сухомлинський».
                </Paragraph>
              </li>
              <li>
                <Paragraph>
                  Викладач хімії Бердичівського фахового коледжу промисловості,
                  економіки та права. Викладач дисциплін «Прикладна хімія»,
                  «Фізична хімія та аналітичний контроль», «Хімія». Працював над
                  створенням навчально-методичного комплексу, створював та
                  удосконалював навчальні та робочі програми. Додатково працював
                  з поповнення знань з хімічної термодинаміки, питань хімічної
                  кінетики, теорії розчинів. Неодноразово запрошувався в
                  Житомирський обласний інститут післядипломної освіти читати
                  лекції вчителям загальноосвітніх шкіл з питань методики
                  викладання хімії.
                </Paragraph>
              </li>
            </ParagraphList>

            <DecorPicture
              src={chem}
              alt="набір хімічних пробірок та колб сірого кольору"
            />
          </div>
        </MainWrapper>
      </AuthBox>
    </MainBox>
  );
};

export default Author;

//  <img
//       src="https://png.pngtree.com/thumb_back/fw800/background/20230527/pngtree-phoenix-bird-in-flames-wallpapers-wallpapershd-image_2697352.jpg"
//       alt=""
//       width={950}
//     />
