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

  > span {
    display: inline-block;
    text-align: center;

    width: 70px;
    border-radius: 5px;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  > span {
    margin-right: 10px;
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
    transition: var(--transition);

    :hover {
      transform: rotateY(180deg);
      -webkit-transition: -webkit-transform 0.5s ease-in;
      -moz-transition: -moz-transform 0.5s ease-in;
      -o-transition: -o-transform 0.5s ease-in;
      transition: transform 0.5s ease-in;
    }
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
  width: 360px;
  height: 360px;

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
    font-size: var(--fz-lg);
  }

  span {
    font-size: var(--fz-md);
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
    width: 100%;

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
  justify-content: space-around;
`;

export const ListContainer = styled.div`
  width: 90%;
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

  border: 2px solid var(--white);
  border-radius: 5px;

  padding: 5px;
  margin: 20px auto 20px auto;

  width: 70%;

  background-color: #3d3d3d;
`;

export const FavoriteItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 100px;
  width: 100%;

  margin: 20px auto;

  img {
    width: 70px;
  }

  h2 {
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

  width: 90%;
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

      font-size: var(--fz-xl);
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

  background-color: #fff;

  padding: 50px;
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
  padding: 40px;

  text-align: center;
`;
//#endregion
