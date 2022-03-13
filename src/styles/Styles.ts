import styled, { keyframes } from 'styled-components';
import { StyledCardProps } from '../types/StyledCardProps';
import Variables from './Variables';

// #region Animations
const imgIn = keyframes`
  0% { 
    transform: rotateY(40deg);
  }
  100% {   
    transform: rotateY(0deg);
  }
`;

const fadeIn = keyframes`
  0% { 
    opacity: 0;
  }
  100% {
    opacity: 1;
  } 
`;

const slideInFromBottom = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

// #endregion

// #region Card
export const StyledTypes = styled.div`
  span {
    font-size: var(--fz-md);
    font-weight: bold;
  }

  > span:nth-child(2) {
    margin-left: 10px;
  }

  @media screen and (max-width: 720px) {
    span {
      font-size: var(--fz-sm);
    }
  }
`;

export const StyledType = styled.span.attrs(
  (props: { typeColor: string; id: string }) => props,
)`
  background: ${(props) => props.typeColor};

  display: inline-block;
  text-align: center;

  width: 90px;
  border-radius: 5px;

  @media screen and (max-width: 720px) {
    width: 70px;
  }
`;

export const StyledDetails = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: var(--fz-md);
  }

  cursor: pointer;

  > h3 {
    margin-right: 10px;
    font-weight: normal;
  }

  transition: var(--transition);
  :hover {
    color: var(--silver);
  }

  @media screen and (max-width: 720px) {
    svg {
      font-size: var(--fz-sm);
    }
  }
`;

export const StyledCardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: var(--fz-xl);

    @media screen and (max-width: 720px) {
      font-size: var(--fz-lg);
    }
  }

  svg {
    cursor: pointer;
  }

  width: 80%;
`;

export const StyledCard = styled.div.attrs((props: StyledCardProps) => {
  return {
    style: {
      background: `linear-gradient(${props.mainColor} 0% 60%, var(--raven-black) 60% 100%)`,
    },
  };
})<StyledCardProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;

  min-width: 250px;
  width: 320px;
  height: 340px;

  animation: ${fadeIn} 1s;

  padding: 5px;
  margin: 10px;

  position: relative;

  transition: var(--transition);

  :hover {
    transform: scale(1.05);
  }

  :before {
    content: '';
    z-index: 0;
    position: absolute;
    top: 25%;
    display: inline-block;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: var(--white);
    opacity: 0.2;
  }

  h2 {
    text-transform: capitalize;
  }
  img {
    animation: ${imgIn} 2s, ${fadeIn} 1s;
    z-index: 1;
    width: 145px;
    height: 145px;
  }
`;
// #endregion

// #region MainList
export const StyledInputWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 60px;
  margin-bottom: 20px;

  input::placeholder {
    color: var(--light-gray);
  }

  input:focus {
    outline: none;
  }

  input::-webkit-search-cancel-button {
    -webkit-appearance: none;
    background: var(--orange);
  }

  input {
    height: 40px;
    min-width: 30%;

    background-color: var(--raven-black);
    color: var(--white);
    font-weight: bold;

    font-size: var(--fz-md);
    border: none;
    border: 2px solid var(--orange);

    padding: 10px 10px 10px 20px;

    border-radius: 5px 0px 0px 5px;
  }

  label {
    font-size: var(--fz-md);
    height: 40px;
    width: 40px;
    display: grid;
    place-items: center;
    background: var(--orange);
    color: var(--white);
    border-radius: 0px 5px 5px 0px;
  }

  label,
  input {
    animation: ${slideInFromLeft} 0.5s;
  }

  @media screen and (max-width: 1160px) {
    input::placeholder {
      font-size: var(--fz-sm);
    }
  }
`;

export const StyledListContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

export const StyledList = styled.section`
  width: 80%;
  min-width: 250px;
  height: 100%;

  margin: 20px auto 20px auto;

  border-radius: 5px;

  background-color: var(--dark-gray);
`;
// #endregion

// #region Favorites
export const StyledFavListContent = styled.section`
  display: flex;
  flex-direction: column;

  width: 40%;
  min-width: 260px;

  border-radius: 5px;

  /* background-color: var(--raven-black); */
  animation: ${slideInFromBottom} 1s, ${fadeIn} 1s;

  margin: 40px auto;

  @media only screen and (max-width: 1024px) {
    width: 80%;
  }
`;

export const StyledFavListEmpty = styled.section`
  transition: var(--transition);
  h2 {
    animation: ${slideInFromBottom} 1s, ${fadeIn} 1s;
    text-align: center;
    margin-top: 40px;
  }
`;

// #endregion

// #region Favorite Item
export const StyledFavItem = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;

  width: 100%;
  margin: 20px auto;

  border-radius: 20px 5px 20px 20px;
  border: 2px solid var(--orange);

  svg {
    flex: 1;

    cursor: pointer;

    font-size: var(--fz-md);
    color: var(--red);
  }

  img {
    max-width: 130px;
    flex: 1;
    background: var(--orange);
  }

  h4 {
    flex: 2;
    text-align: center;
    text-transform: capitalize;
  }

  @media only screen and (max-width: 460px) {
    img {
      width: 80px;
    }
  }
`;
// #endregion

// #region Pagination
export const StyledPagButton = styled.button`
  border: none;
  border-radius: 5px;

  z-index: 2;

  color: var(--orange);
  background-color: var(--white);

  width: 75px;

  padding: 5px;
  margin: 10px;

  font-weight: bold;

  cursor: pointer;
  animation: ${slideInFromBottom} 0.5s;

  :hover {
    background-color: var(--black);
    color: var(--white);
  }
`;

export const StyledPag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 2;

  width: 100%;
  height: 50px;

  background-color: var(--orange);

  animation: ${slideInFromBottom} 0.5s;

  position: fixed;
  bottom: 0px;
  left: 0px;
`;
// #endregion

// #region Header
export const StyledHeader = styled.header`
  ${Variables};

  height: 80px;
  width: 100%;
  min-width: 280px;

  background-color: var(--orange);
`;

export const StyledHeaderContent = styled.nav`
  align-items: center;
  display: flex;

  width: 80%;
  height: 80px;

  margin: 0 auto;

  ul {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 720px) {
    svg {
      width: 24px;
    }
  }
  @media only screen and (max-width: 360px) {
    width: 90%;
  }
`;
// #endregion

// #region Modal
export const StyledModal = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  z-index: 1000;

  display: flex;

  width: 40%;
  min-width: 260px;

  padding: 20px;
  border-radius: 5px;
  border: 2px solid var(--orange);

  background-color: var(--dark-gray);

  animation: ${fadeIn} 0.25s;

  svg {
    margin-right: auto;
    cursor: pointer;

    transition: var(--transition);
    :hover {
      color: var(--silver);
    }
  }

  img {
    animation: ${imgIn} 0.5s, ${fadeIn} 1s;

    width: 240px;
    height: 240px;
  }

  @media only screen and (max-width: 1440px) {
    width: 60%;
  }

  @media only screen and (max-width: 860px) {
    padding: 10px;
    width: 95%;
    h3 {
      font-size: var(--fz-md);
    }

    h4 {
      font-size: var(--fz-sm);
    }
  }
`;

export const StyledModalLeft = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  text-transform: capitalize;

  border-radius: 5px;

  margin-right: 40px;

  h3 {
    border-bottom: 1px solid var(--orange);

    background: var(--raven-black);
    border-radius: 5px;
    width: 100%;
    text-align: center;
  }

  h4 {
    text-align: center;
  }

  @media only screen and (max-width: 768px) {
    margin-right: 0;
    padding: 10px;
    img {
      width: 100px;
      height: 100px;
    }
  }
`;

export const StyledModalRight = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  padding: 20px;

  width: 80%;

  h4 {
    text-transform: capitalize;
    text-align: center;
  }

  h3 {
    text-align: center;
    border-bottom: 1px solid var(--orange);

    background: var(--raven-black);
    border-radius: 5px;

    margin-top: 20px;
    margin-bottom: 10px;
  }

  button {
    margin-left: auto;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: 768px) {
    justify-content: space-between;
  }

  @media only screen and (max-width: 360px) {
    padding: 10px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;

  background-color: rgba(0, 0, 0, 0.7);
`;

// #endregion

// #region Stat Item
export const StyledStatsItem = styled.div`
  display: flex;
  flex-direction: column;

  progress {
    /* resets */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;

    width: 100%;
    height: 16px;

    margin-top: 5px;
    margin-bottom: 10px;

    border-radius: 5px;

    background-color: var(--white);
    color: var(--orange);

    /* webkit */
    ::-webkit-progress-bar {
      background: var(--white);
      border-radius: 5px;
    }

    ::-webkit-progress-value {
      background-color: var(--orange);
      border-radius: 5px;
    }

    /* moz */
    ::-moz-progress-bar {
      background-color: var(--orange);
      border-radius: 5px;
    }
  }

  @media only screen and (max-width: 768px) {
    progress {
      height: 7px;
    }
  }
`;
// #endregion

// #region Loading
export const StyledMessage = styled.div`
  margin-top: 40px;

  text-align: center;
`;
// #endregion
