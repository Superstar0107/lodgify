import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Alegreya:wght@500&family=Source+Code+Pro:wght@500&display=swap');

  :root {
    --color-bodybg: #EEEEEE;
    --color-primary: #00B797;
    --color-primary-focus: #00B797AB;
    --color-border:  #DDDDDD;
    --color-light: #F2FBFA;
    --greyscale-900: #333333;
    --color-white: #FFFFFF;
    --font-size-default: 16px;
  }

  html {
    height: 100%;
    width: 100%;
  }

  body {
    font-size: var(--font-size-default);
    font-family: 'Source Code Pro', monospace;
    background-color: var(--color-bodybg);
    margin: 0;
  }
`;
