import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

/* 그밖에 글로벌 스타일 작성하기  */
html {
    font-family: system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
}
body {
    background-color: #ffff;
    color: rgb(60, 54, 107);
}
a {
    text-decoration: none;
  }
  `;

export default GlobalStyle;
