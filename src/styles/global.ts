import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html{
    font-size:62.5%;
  }

  body { 
    font-family: -apple-system, BlinkMacSystemFont, Fira Sans, Oxygen,
    Ubuntu, Cantarell,sans-serif;
    background-color: #f7fafb;
    height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
