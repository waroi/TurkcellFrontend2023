import { createGlobalStyle } from "styled-components";
import fontBold from '../fonts/Gilroy-Bold.ttf';
import fontLight from '../fonts/Gilroy-Regular.ttf';


export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SVN-Gilroy';
    src: url('${fontBold}') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'SVN-Gilroy';
    src: url('${fontLight}') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #FDFDFD;
    font-family: 'SVN-Gilroy', sans-serif;
  }
`;