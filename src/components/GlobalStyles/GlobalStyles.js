import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 1.125rem;
    line-height: 1.6;
    font-weight: 400;
    font-family: sans-serif;
    box-sizing: border-box;
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.bg};
    transition: all 0.5s;
  }
`;