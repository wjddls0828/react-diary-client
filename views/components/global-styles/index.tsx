import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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

`;

export default GlobalStyles;
