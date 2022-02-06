import { css } from 'styled-components';

const Variables = css`
  :root {
    // Font
    --font-main: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;

    // Font size
    --fz-xxs: 10px;
    --fz-xs: 12px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;

    // Colors
    --red: #e3350d;
    --orange: #ee6b2f;
    --white: #fff;
    --black: #000;
    --raven-black: #3d3d3d;
    --gray: #616161;
    --dark-gray: #313131;
    --blue: #057dcd;
    --light-gray: #dcd6d6;
    --silver: #c9c9c9;

    // Other
    --transition: all 0.25s ease-in-out;
  }
`;

export default Variables;
