import { css } from 'styled-components';

const Variables = css`
  :root {
    // Font
    --font-main: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;

    // Font size
    --fz-xxs: 0.9rem;
    --fz-xs: 1rem;
    --fz-sm: 1.3rem;
    --fz-md: 1.6rem;
    --fz-lg: 1.8rem;
    --fz-xl: 2.4rem;
    --fz-xxl: 3.2rem;

    // Colors
    --red: #e3350d;
    --orange: #ee6b2f;
    --white: #fff;
    --silver: #c9c9c9;
    --light-gray: #dcd6d6;
    --gray: #616161;
    --dark-gray: #313131;
    --raven-black: #3d3d3d;
    --black: #000;
    --blue: #057dcd;

    // Other
    --transition: all 0.25s ease-in-out;
  }
`;

export default Variables;
