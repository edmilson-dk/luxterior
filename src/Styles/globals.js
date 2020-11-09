import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  head {
    font-size: 62.5%;
  }

  h1,
  h2 {
    font-family: 'Libre Caslon Text', serif;
    font-weight: 700; 
  }

  html,
  body,
  h3,
  h4,
  input,
  button {
    font-family: 'Roboto', sans-serif;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
  }

  p {
    line-height: 1.4;  
  }
`;

export default GlobalStyles;


