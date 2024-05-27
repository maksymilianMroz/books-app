import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f8f9fa;
    color: #212529;
    line-height: 1.6;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 400;
  }

  p {
    margin: 0 0 1rem 0;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    font-family: inherit;
  }
`;

export default GlobalStyle;
