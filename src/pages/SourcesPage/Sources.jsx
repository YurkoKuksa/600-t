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

import download from "../../assets/svg/download1.svg";

import { useEffect, useState } from "react";

const Sources = () => {
  const [sourceItems, setSourceItems] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/sourcesPage.json`)
      .then((response) => response.json())
      .then((data) => {
        setSourceItems(data);
      })
      .catch((error) => console.error("Помилка при завантаженні JSON:", error));
  }, []);

  return (
    <MainBox>
      <ContactBox>
        <MainTitle>Ресурси</MainTitle>
        <ContentBox>
          <ParagraphList>
            {sourceItems.map(
              ({ fileName, grade, year, author, file }, index) => (
                <ListSources key={index}>
                  {file && file.length > 0 ? (
                    file.map((f, fileIndex) => (
                      <LinkDownload
                        key={fileIndex}
                        href={f.url}
                        download={fileName}
                      >
                        <DownloadFile src={download} alt="завантажити" />
                      </LinkDownload>
                    ))
                  ) : (
                    <p>Немає доступних файлів.</p>
                  )}
                  <TitleWrapper>
                    {file && file.length > 0 && file[0]?.url ? (
                      <Paragraph
                        href={file[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {fileName}
                      </Paragraph>
                    ) : (
                      <Paragraph>Файл недоступний для завантаження</Paragraph>
                    )}
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
          </ParagraphList>
        </ContentBox>
      </ContactBox>
    </MainBox>
  );
};

export default Sources;

// <p>No files available.</p>
// <Paragraph>No download link available</Paragraph>
// const y = 2;

// console.log(x * y, `\n`, "множення");
// const message = "Welcokmeto the world of Engl";

// const smallMessage = message.slice(0, 8).toUpperCase();
// const sho = "ШО ти там хочеш?" + "\n" + " Якої холери";

// console.log(sho);
// console.log(8 && 5); // true && true -> 5
