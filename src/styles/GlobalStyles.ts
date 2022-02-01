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
    background-color: var(--dark-gray);
    color: var(--white);
  }

  ul, li, ol {
    list-style: none;
  }

  a {
    cursor: pointer;
  }

  button {
    transition: var(--transition);
    :hover {
      color: var(--black)
    }
  }  

  a {    
    text-decoration: none;
    color: var(--white);
    transition: var(--transition);

    :hover {
      color: var(--black)
    }
  }
`;
