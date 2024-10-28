import {
  ContactBox,
  ContentBox,
  DescripGroup,
  DownloadFile,
  LinkDownload,
  ListSources,
  MainBox,
  MainTitle,
  Paragraph,
  ParagraphList,
  ParagraphName,
  TitleWrapper,
} from "./Sources.styled";

// import pdf from "../../assets/pdf/corrosion_mettals.pdf";
import download from "../../assets/svg/download1.svg";

import sourseItems from "../../assets/data/sourcesPage.json";

const Sources = () => {
  return (
    <MainBox>
      <ContactBox>
        <MainTitle>Ресурси</MainTitle>

        <ContentBox>
          <ParagraphList>
            {sourseItems.map(
              ({ fileName, grade, year, author, file }, index) => (
                <ListSources key={index}>
                  <LinkDownload href={file} download="Корозія Металів">
                    <DownloadFile src={download} alt="завантажити" />
                  </LinkDownload>

                  <TitleWrapper>
                    <Paragraph
                      href={file}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {fileName}
                    </Paragraph>
                    <DescripGroup>
                      <li>
                        <ParagraphName>{grade}</ParagraphName>
                      </li>
                      <li>
                        <ParagraphName>{year}</ParagraphName>
                      </li>
                      <li>
                        <ParagraphName>{author}</ParagraphName>
                      </li>
                    </DescripGroup>
                  </TitleWrapper>
                </ListSources>
              )
            )}

            {/* <ListSources>
              <LinkDownload href={pdf} download="Корозія Металів">
                <DownloadFile src={download} alt="завантажити" />
              </LinkDownload>

              <TitleWrapper>
                <Paragraph href={pdf} target="_blank" rel="noopener noreferrer">
                  Корозія металів та способи її запобігання
                </Paragraph>
                <DescripGroup>
                  <li>
                    <ParagraphName>1-й рік</ParagraphName>
                  </li>
                  <li>
                    <ParagraphName>2008 рік</ParagraphName>
                  </li>
                  <li>
                    <ParagraphName>Кукса С.П.</ParagraphName>
                  </li>
                </DescripGroup>
              </TitleWrapper>
            </ListSources> */}
          </ParagraphList>
        </ContentBox>
      </ContactBox>
    </MainBox>
  );
};

export default Sources;

// const y = 2;

// console.log(x * y, `\n`, "множення");
// const message = "Welcokmeto the world of Engl";

// const smallMessage = message.slice(0, 8).toUpperCase();
// const sho = "ШО ти там хочеш?" + "\n" + " Якої холери";

// console.log(sho);
// console.log(8 && 5); // true && true -> 5
