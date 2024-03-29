import { Link } from "react-router-dom";
import {
  AddressBox,
  AddressWrapper,
  Box,
  ContactLink,
  ListStyled,
  LogoBox,
  LogoLink,
  MainBox,
  Paragraph,
  Quote,
  SpanWrapper,
  SvgPicture,
} from "./Footer.styled";
import chemistry from "../../assets/svg/chemistrywhite.svg";

const Footer = () => {
  return (
    <MainBox>
      <LogoBox>
        <Box>
          <Link to="/">
            <SvgPicture
              src={chemistry}
              alt="main logo"
              width={40}
              height={40}
            />
          </Link>
          <LogoLink>Chemistry tasks</LogoLink>
        </Box>
        <Quote>
          "Хімія - це мистецтво перетворення звичайного у диво, а наука - ключ
          до розкриття цього чуда"
        </Quote>
      </LogoBox>

      <AddressBox>
        <div>
          <Paragraph>
            Для пропозицій та співпраці, будь ласка, звертайтеся за контактними
            даними:
          </Paragraph>

          <AddressWrapper>
            <ul>
              <ListStyled>
                <ContactLink href="mailto:kuksasergei@ukr.net">
                  <SpanWrapper>&#9993; &nbsp;</SpanWrapper>
                  &nbsp; kuksasergey55@gmail.com
                </ContactLink>
              </ListStyled>
              <ListStyled>
                <ContactLink href="tel:+380968103053">
                  <SpanWrapper> &#128222;</SpanWrapper> +38 (096) 810-30-53
                </ContactLink>
              </ListStyled>
            </ul>
          </AddressWrapper>
        </div>
      </AddressBox>
    </MainBox>
  );
};

export default Footer;

// Contacts
// phone +390968103053
// email kuksasergey55@gmail.com, kuksasergei@ukr.net

// Соціальні мережі
// youtube
// instagram

// Звлишити відгук, форма

// ЦИТАТИ
//"Хімія - це мистецтво перетворення звичайного у диво, а наука - ключ до розкриття цього чуда";

// Звичайні речі природи викликають у нас величезне здивування і виражають яскравішу красу, ніж штучно вигадані. - Леонардо да Вінчі
// Ми всі хіміки. Наші життя залежать від хімічних процесів всередині нас та навколо нас. - Люї Пастер
// Хімія може бути вибуховою, але без неї ми нікуди. - Річард Фійнман
