import styled, { keyframes } from 'styled-components';
import Variables from './Variables';

//#region Animations
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

const slideInFromTop = keyframes`
  0% {
    transform: translateY(-100%);
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

//#endregion

//#region Card
export const TypesContainer = styled.div`
  > span:nth-child(2) {
    margin-left: 10px;
  }
`;

export const TypeItem = styled.span.attrs(
  (props: { typeColor: string; id: string }) => props,
)`
  background: ${props => props.typeColor};

  display: inline-block;
  text-align: center;

  width: 70px;
  border-radius: 5px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  > h4 {
    margin-right: 10px;
    font-weight: normal;
  }

  transition: var(--transition);
  :hover {
    color: var(--silver);
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  svg {
    cursor: pointer;
  }

  width: 80%;
`;

export const CardContainer = styled.div.attrs(
  (props: { mainColor: string; id: string }) => props,
)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  border-radius: 10px;

  min-width: 230px;
  width: 340px;
  height: 340px;

  animation: ${fadeIn} 1s;

  padding: 5px;
  margin: 10px;

  position: relative;

  transition: var(--transition);

  :hover {
    transform: scale(1.05);
  }

  :after {
    content: '${props => props.id}';
    font-size: var(--fz-xxl);
    color: var(--white);
    z-index: 0;
    position: absolute;
    top: 5%;
    left: 5%;
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

  background: linear-gradient(
    ${props => props.mainColor} 0% 60%,
    var(--raven-black) 60% 100%
  );

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
//#endregion

//#region MainList
export const ListInputContainer = styled.div`
  display: flex;
  justify-content: center;

  margin: 20px;

  input {
    height: 35px;
    min-width: 30%;

    animation: ${slideInFromLeft} 0.5s;

    background-color: var(--white);
    color: var(--black);

    font-size: var(--fz-md);

    border: 1px solid var(--white);
    border-radius: 5px;

    padding: 20px;

    cursor: auto;
  }
`;

export const ListContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

export const ListContainer = styled.div`
  width: 80%;
  min-width: 280px;
  height: 100%;

  margin: 20px auto 20px auto;
  padding: 5px;

  border-radius: 5px;

  background-color: var(--dark-gray);
`;
//#endregion

//#region Favorites
export const FavoriteListContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;

  border-radius: 10px;

  background-color: var(--raven-black);
  animation: ${slideInFromBottom} 1s, ${fadeIn} 1s;

  margin: 40px auto;
`;

export const FavoriteListEmpty = styled.div`
  h2 {
    text-align: center;
    margin-top: 40px;
  }
`;

export const FavoriteItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 100px;
  width: 100%;
  margin: 20px auto;

  svg {
    cursor: pointer;
  }

  img {
    width: 100px;
  }

  h4 {
    width: 30%;
    text-align: center;
    text-transform: capitalize;
  }
`;
//#endregion

//#region Pagination
export const PaginationButton = styled.button`
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

export const PaginationContainer = styled.div`
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
//#endregion

//#region Header
export const HeaderContainer = styled.header`
  ${Variables};

  width: 100%;
  height: 80px;

  background-color: var(--orange);
`;

export const HeaderContent = styled.nav`
  align-items: center;
  display: flex;

  width: 80%;
  height: 80px;

  margin: 0 auto;

  img {
    width: 160px;
  }

  ul {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: space-between;

    li {
      padding: 5px;
    }
  }
`;
//#endregion

//#region Modal
export const ModalContainer = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  z-index: 1000;

  display: flex;

  padding: 10px;
  border-radius: 10px;

  background-color: var(--dark-gray);

  animation: ${fadeIn} 1.5s;

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
`;

export const StatsItemContainer = styled.div`
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

    margin: 10px 0;

    border-radius: 10px;

    background-color: var(--white);
    color: var(--orange);

    /* webkit */
    ::-webkit-progress-bar {
      background: var(--white);
      border-radius: 10px;
    }

    ::-webkit-progress-value {
      background-color: var(--orange);
      border-radius: 10px;
    }

    /* moz */
    ::-moz-progress-bar {
      background-color: var(--orange);
      border-radius: 10px;
    }
  }
`;

export const ModalLeftContainer = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  text-transform: capitalize;

  border-radius: 10px;

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
`;

export const ModalRightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  padding: 20px;

  border-radius: 10px;
  width: 250px;

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

//#endregion

//#region Loading
export const LoadingContainer = styled.div`
  margin-top: 40px;

  text-align: center;
`;
//#endregion
