import { Link } from "react-router-dom";
import {
  AddressBox,
  AddressWrapper,
  AllRightsBox,
  Box,
  ContactLink,
  ContactList,
  CopyRightText,
  ListStyled,
  LogoBox,
  LogoLink,
  MainBox,
  MainWrapper,
  Paragraph,
  Quote,
  SpanWrapper,
  SvgPicture,
} from "./Footer.styled";
import chemistry from "../../assets/svg/chemistrywhite.svg";

const Footer = () => {
  return (
    <MainBox>
      <MainWrapper>
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
              Для пропозицій та співпраці, будь ласка, звертайтеся за
              контактними даними:
            </Paragraph>

            <AddressWrapper>
              <ContactList>
                <ListStyled>
                  <ContactLink href="mailto:chemi2836@gmail.com">
                    <SpanWrapper>&#9993; &nbsp;</SpanWrapper>
                    &nbsp; chemi2836@gmail.com
                  </ContactLink>
                </ListStyled>
                <ListStyled>
                  <ContactLink href="tel:+380968103053">
                    <SpanWrapper> &#128222;&nbsp;</SpanWrapper> +38 (096)
                    810-30-53
                  </ContactLink>
                </ListStyled>
              </ContactList>
            </AddressWrapper>
          </div>
        </AddressBox>
      </MainWrapper>

      <AllRightsBox>
        <CopyRightText>
          &copy; 2024 "600 Chemistry Problems". All rights reserved.
        </CopyRightText>
      </AllRightsBox>
    </MainBox>
  );
};

export default Footer;
