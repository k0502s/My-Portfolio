import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    width: 100%;
    overflow-x: hidden;
    font-family: system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
}
body {
    width: 100%;
    height: 100%;
    background-color: #ffff;
    background-size: cover;
    margin: 0;
    padding: 0;
    color: rgb(60, 54, 107);
}
*, *:before, *:after {
    outline: none;
    user-select: none;
    box-sizing: border-box;
  }
  a,
  a:hover,
  a:focus {
      color: inherit;
      text-decoration: none;
      transition: all 0.3s;
  }

  ul, ol, li {
      list-style: none;
  }
  `;

export default GlobalStyle;
