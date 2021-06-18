import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "NanumGothic";
  }
  html,
  body {
    width : 100%;
    height: 100%;
    background-color: #F1F0EF;
  }

  button {
    cursor: pointer;
    background-color: none;
  }

  button:focus {
    outline: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  @font-face {
    font-family: "NanumSquare";
    src: url("/fonts/NanumSquareR.ttf") format("truetype");
  }

  @font-face {
    font-family: "Sunflower";
    src: url("/fonts/Sunflower-Medium.ttf") format("truetype");
  }

  @font-face {
    font-family: "NanumGothic";
    src: url("/fonts/NanumGothic-Regular.ttf") format("truetype");
  }
`;

export default GlobalStyles;
