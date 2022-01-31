import { createGlobalStyle } from 'styled-components';
import Variables from './Variables';

export const GlobalStyles = createGlobalStyle`
  ${Variables};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
  }

  body {
    min-height: 100%;
  }

  body {
    font-family: var(--font-main);
    background-color: var(--white);
    color: var(--black);
  }

  ul, li, ol {
    list-style: none;
  }

  li {
    cursor: pointer;
  }

  a {    
    text-decoration: none;
    color: var(--black);
    transition: var(--transition);

    :hover {
      color: var(--blue)
    }
  }
`;
