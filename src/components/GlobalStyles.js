import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Outfit', sans-serif;
  }

  html, body {
    width: 100%;
    margin: 0;
    overflow-x: hidden;
    height: 100%;
    font-family: 'Outfit', sans-serif;
    background-color: #ffffff;
    color: #1a1a1a;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: inherit;

  }

  ul {
    list-style: none;
  }

  button,
  input,
  textarea,
  select {
    font-family: 'Outfit', sans-serif;
  }
`;

export default GlobalStyles;
