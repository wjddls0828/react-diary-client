import { THEME_COLOR } from 'common/constant';
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
    color: inherit;
    :hover{
      color: inherit;
    }
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

  /* Events On Calendar */
  .goodMood {
    background-image: url('/good.png');
    background-size: contain;
    background-repeat: no-repeat;
  }
  .sosoMood {
    background-image: url('/soso.png');
    background-size: contain;
    background-repeat: no-repeat;
  }
  .sadMood {
    background-image: url('/sad.png');
    background-size: contain;
    background-repeat: no-repeat;
  }

  /* OVERRIDE @fullcalendar */
  .fc-daygrid-day-events:before {
    content:none;
  }

  .fc-daygrid-day-events {
    display: grid;
    padding: 0;

    grid-template-rows: repeat(2, 25px);
    grid-template-columns: repeat(3, 25px);
    direction: rtl;
  }

  .fc-toolbar-chunk {
    display: flex;
  }

  .fc-daygrid-event {
    height: 20px;
  }

  .fc-today-button {
    font-size: 13px !important;
    :disabled{
      /* opacity:1 !important; */
    }
    :hover{
      background-color: ${THEME_COLOR.LIGHT_BROWN} !important;
    }
    background-color:  ${THEME_COLOR.LIGHT_BROWN} !important;
    border:none !important;
  }

  .fc-prev-button, .fc-next-button {
    background-color: ${THEME_COLOR.BROWN} !important;    
    border: none !important;
    margin-left: 3px !important;
  }


`;

export default GlobalStyles;
