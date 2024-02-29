import {
  Bold,
  DescripBox,
  ForWhoDescription,
  ForWhoListStyle,
  ListStyle,
  MainBox,
  OtherDescrBox,
  ParagDescription,
  Paragraph,
  SmallTitle,
  SpanName,
  SpanTick,
  Title,
  TitleBox,
  WhyDescription,
  WhyListStyle,
} from "./AboutBook.styled";
import bookTasks from "../../../assets/images/600.jpg";

const AboutBook = () => {
  return (
    <MainBox>
      <DescripBox>
        <TitleBox>
          <Title>600 Задач Хімії </Title>
          <ul>
            <li>
              <Paragraph>
                <Bold>Автор:</Bold> <SpanName>Кукса Сергій Петрович</SpanName>
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <Bold>Рік видання: </Bold> 2024
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <Bold>Обсяг: </Bold> 125 ст.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <Bold>Мова: </Bold> українська
              </Paragraph>
            </li>
          </ul>
        </TitleBox>
        <OtherDescrBox>
          <ListStyle>
            <li>
              <ParagDescription>
                - Більш ніж за 25 років на ринку, "600 задач з хімії" стала
                надійним помічником для десятків тисячів учнів, студентів і
                вчителів.
              </ParagDescription>
            </li>

            <li>
              <ParagDescription>
                - Завдання систематизовані та подані у логічній послідовності,
                що значно спрощує процес навчання.
              </ParagDescription>
            </li>

            <li>
              <ParagDescription>
                - Оригінальна методика викладання з простими та зрозумілими
                поясненнями.
              </ParagDescription>
            </li>
            <li>
              <ParagDescription>
                - Кожен розділ супроводжується тестами для самоконтролю та
                відповідями до них.
              </ParagDescription>
            </li>
            <li>
              <ParagDescription>
                - У 2024 році наша книга отримала додаткові матеріали та
                вдосконалення, що ще більш задовольняє потреби учнів!
              </ParagDescription>
            </li>
          </ListStyle>
        </OtherDescrBox>
        <OtherDescrBox>
          <SmallTitle>Для кого ця книга: </SmallTitle>
          <ForWhoListStyle>
            <li>
              <ForWhoDescription>
                <SpanTick>&#10004;</SpanTick> Для учнів та студентів, що
                прагнуть зрозуміти хімію.
              </ForWhoDescription>
            </li>
            <li>
              <ForWhoDescription>
                <SpanTick> &#10004;</SpanTick> Для абітурієнтів, які мріють про
                вступ на хімічний факультет.
              </ForWhoDescription>
            </li>
            <li>
              <ForWhoDescription>
                <SpanTick> &#10004;</SpanTick> Для вчителів, які шукають
                найкращий матеріал для своїх учнів.
              </ForWhoDescription>
            </li>
            <li>
              <ForWhoDescription>
                <SpanTick> &#10004;</SpanTick> Для всіх, хто цікавиться чарівним
                світом хімії.
              </ForWhoDescription>
            </li>
          </ForWhoListStyle>
        </OtherDescrBox>
        <OtherDescrBox>
          <SmallTitle>Чому "600 задач з хімії":</SmallTitle>
          <WhyListStyle>
            <li>
              <WhyDescription>
                Досвідчений і надійний посібник, який розкриває найскладніші
                хімічні концепції.
              </WhyDescription>
            </li>
            <li>
              <WhyDescription>
                Готує до іспитів та контрольних робіт, даруючи впевненість у
                власних знаннях.
              </WhyDescription>
            </li>
            <li>
              <WhyDescription>
                Інтуїтивно зрозумілий підхід до розв'язання завдань, що робить
                вивчення хімії легким та захопливим.
              </WhyDescription>
            </li>
            <li>
              <WhyDescription>
                Поступова побудова знань в галузі хімії, яка веде до успішного
                оволодіння предметом.
              </WhyDescription>
            </li>
          </WhyListStyle>
        </OtherDescrBox>
      </DescripBox>
      <div>
        <img
          src={bookTasks}
          alt="обкладинка книги 600 задач з хімії"
          width={300}
        />
      </div>
    </MainBox>
  );
};
export default AboutBook;
