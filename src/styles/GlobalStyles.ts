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
    font-size: 62.5%;
  }

  body {
    min-height: 100%;
    padding-bottom: 60px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background-color: var(--raven-black);
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: var(--gray);
    }
  }

  body {
    font-family: var(--font-main);
    background-color: var(--dark-gray);
    color: var(--white);
  }

  h1 {
    font-size: var(--fz-xxl);
  }

  h2 {
    font-size: var(--fz-xl);
  }

  h3 {
    font-size: var(--fz-lg);
  }

  h4 {
    font-size: var(--fz-md);
  }

  h5 {
    font-size: var(--fz-sm);
  }

  h6 {
    font-size: var(--fz-xs);
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

  @media only screen and (max-width: 720px) {
    h1 {
      font-size: var(--fz-xl);
    }

    h2 {
      font-size: var(--fz-lg);
    }

    h3 {
      font-size: var(--fz-md);
    }

    h4 {
      font-size: var(--fz-sm);
    }

    h5 {
      font-size: var(--fz-xs);
    }

    h6 {
      font-size: var(--fz-xxs);
    }
  }
`;
