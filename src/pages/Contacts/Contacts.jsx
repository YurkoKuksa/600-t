import {
  AddressWrapper,
  CollageName,
  ContactBox,
  ContactLink,
  ContentBox,
  DecorPicture,
  Description,
  JobBox,
  JobTitle,
  ListStyled,
  MainBox,
  MainTitle,
  SpanWrapper,
  SvgItem,
} from "./Contacts.styled";

import location from "../../assets/svg/location.svg";
import phone from "../../assets/svg/call.svg";
import mail from "../../assets/svg/mail.svg";
import decor from "../../assets/images/chemistry5.png";

const Contacts = () => {
  return (
    <MainBox>
      <ContactBox>
        <MainTitle>Контакти</MainTitle>
        <ContentBox>
          <Description>
            Для отримання подальшої інформації, зворотнього зв'язку, можливостей
            співпраці або подання пропозицій, будь ласка, звертайтеся за
            контактними даними.
          </Description>
          <AddressWrapper>
            <ul>
              <ListStyled>
                <ContactLink href="mailto:chemi2836@gmail.com">
                  <SpanWrapper>
                    <SvgItem src={mail} alt="локація" width={20} /> &nbsp;
                  </SpanWrapper>
                  chemi2836@gmail.com
                </ContactLink>
              </ListStyled>

              <ListStyled>
                <ContactLink href="tel:+380968103053">
                  <SpanWrapper>
                    <SvgItem src={phone} alt="локація" width={22} /> &nbsp;
                  </SpanWrapper>
                  +38 (096) 810-30-53
                </ContactLink>
              </ListStyled>

              <ListStyled>
                <ContactLink
                  href="https://www.google.com/maps/d/viewer?mid=1G6etACP-7wEXQcc5rTqkMA9uE-U&hl=en_US&ll=49.90016367377482%2C28.591063499999994&z=15"
                  target="_blank"
                >
                  <SpanWrapper>
                    <SvgItem src={location} alt="локація" width={24} /> &nbsp;
                  </SpanWrapper>
                  Місто Бердичів, Україна
                </ContactLink>
              </ListStyled>
            </ul>
          </AddressWrapper>
          <JobBox>
            <JobTitle> Місце роботи:</JobTitle>
            <ul>
              <CollageName>
                Бердичівський коледж промисловості, економіки та права
              </CollageName>

              <ListStyled>
                <ContactLink
                  href="https://www.google.com/maps/d/viewer?mid=1G6etACP-7wEXQcc5rTqkMA9uE-U&hl=en_US&ll=49.8987250007059%2C28.57604945000001&z=20"
                  target="_blank"
                >
                  вул. Молодогвардійська, 2а, Бердичів Україна
                </ContactLink>
              </ListStyled>
              <ListStyled>
                <ContactLink href="https://www.bfcpep.org.ua/" target="_blank">
                  https://www.bfcpep.org.ua/
                </ContactLink>
              </ListStyled>
            </ul>
          </JobBox>
          <DecorPicture src={decor} alt="реактивна хімчіна колба" />
        </ContentBox>
      </ContactBox>
    </MainBox>
  );
};
export default Contacts;
