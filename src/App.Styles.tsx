import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle: any = createGlobalStyle`
  ${normalize}
    // Variables
  :root {
    --default-font: 'Inter', sans-serif;

    --tg-theme-bg-color: #fff;
    --tg-theme-text-color: #0a0a0a;
    --tg-theme-hint-color: #929292;
    --tg-theme-link-color: #207ae4;
    --tg-theme-button-color: #5bc8fb;
    --tg-theme-button-text-color: #fffeec;
    --tg-theme-secondary-bg-color: #f3f2f9;
    --tg-theme-blue-bg-color: #107ec2;
    --tg-theme-gray: #43434A;
    --tg-theme-white: #ffffff;
    --tg-theme-background: #000;
    --border-radius: 2vmin;

    height: 100%;
  }
  
  html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background: var(--tg-theme-background);
  }

  body {
    background: linear-gradient(0deg, var(--tg-theme-blue-bg-color) 30%,  var(--tg-theme-background) 100%);
    font-family: var(--default-font);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }
  
  #root {
    height: 100%;
  }

  * {
    user-select: none;
    -user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
`;
