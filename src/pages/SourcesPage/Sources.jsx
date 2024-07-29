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
              <LinkDownload
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                <DownloadFile
                  src={download}
                  alt="завантажити"
                  download="Корозія Металів"
                />
              </LinkDownload>
              <DescripGroup>
                <li>
                  <Paragraph>
                    Корозія металів та способи її запобігання
                  </Paragraph>
                </li>
                <li>
                  <ParagraphName>2008 рік</ParagraphName>
                </li>
                <li>
                  <ParagraphName>Кукса С.П.</ParagraphName>
                </li>
              </DescripGroup>
            </ListSources>
          </ParagraphList>
        </ContentBox>
      </ContactBox>
    </MainBox>
  );
};

export default Sources;
