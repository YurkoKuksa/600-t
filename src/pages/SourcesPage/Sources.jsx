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

import pdf from "../../assets/pdf/corrosion_mettals.pdf";
import download from "../../assets/svg/download1.svg";

const Sources = () => {
  return (
    <MainBox>
      <ContactBox>
        <MainTitle>Ресурси</MainTitle>

        <ContentBox>
          <ParagraphList>
            <ListSources>
              <LinkDownload href={pdf} download="Корозія Металів">
                <DownloadFile src={download} alt="завантажити" />
              </LinkDownload>

              <TitleWrapper>
                <Paragraph href={pdf} target="_blank" rel="noopener noreferrer">
                  Корозія металів та способи її запобігання
                </Paragraph>
                <DescripGroup>
                  <li>
                    <ParagraphName>2008 рік</ParagraphName>
                  </li>
                  <li>
                    <ParagraphName>Кукса С.П.</ParagraphName>
                  </li>
                </DescripGroup>
              </TitleWrapper>
            </ListSources>
          </ParagraphList>
        </ContentBox>
      </ContactBox>
    </MainBox>
  );
};

export default Sources;
