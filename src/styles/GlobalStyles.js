// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Roboto Slab', serif;
        src: url('../srcs/fonts/RobotoSlab-VariableFont_wght.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

  body {
    font-family: 'Roboto Slab', serif;
    scroll-behavior: smooth;
  }
`;

export default GlobalStyle;
