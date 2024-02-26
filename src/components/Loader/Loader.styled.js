import styled from "styled-components";
// стилі з CSS проєкта 3 контейнера
export const df = styled.div`
  /* головна обкладинка CONTAINER, DIV */
  .wrapper {
    background-color: #f4f4fd;
    display: flex;
    flex-direction: row-reverse;
    padding: 3px 4px;
    min-height: 100vh;
    margin: 0;
  }
  /* головна секція зправа HOME */
  .main-section {
    background-color: #c0c0c0;
    padding: 3px;
    max-width: 100%;
    margin: 0;
    border: 1px solid cornflowerblue;
    flex-grow: 1;
    box-shadow: 0px 1px 6px 0px rgba(46, 47, 66, 0.08),
      0px 1px 1px 0px rgba(46, 47, 66, 0.16),
      0px 2px 1px 0px rgba(46, 47, 66, 0.08);
  }
  /* герой у секції HERO */
  .hero-section {
    background-color: #f8f6f6;
    padding: 290px 0;
    border: 1px solid cornflowerblue;
    border-radius: 10px;
    margin-bottom: 20px;
    background-image: url(../images/chemistry76.png);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
`;
