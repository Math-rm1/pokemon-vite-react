import styled from 'styled-components';
import Variables from './Variables';

//#region Card
export const CardContainer = styled.div`
  border: 2px solid var(--white);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  width: 250px;
  padding: 5px;
  margin: 10px;
  height: 300px;
  background-color: var(--dark-gray);

  div > span:nth-child(2) {
    margin-left: 20px;
  }

  div > span {
    text-align: center;
    background-color: black;
    display: inline-block;
    width: 70px;
    border-radius: 5px;
  }

  h2 {
    text-transform: capitalize;
    font-size: var(--fz-lg);
  }

  span {
    font-size: var(--fz-md);
  }

  img {
    width: 100px;
    height: 100px;
  }
`;
//#endregion

//#region MainList
export const ListInputContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;

  input {
    border-radius: 5px;
    height: 35px;
    width: 80%;
  }
`;

export const ListContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

export const ListContainer = styled.div`
  border: 2px solid var(--orange);
  border-radius: 5px;
  background-color: var(--gray);
  width: 80%;
  padding: 5px;
  height: 100%;
  margin: 20px auto 20px auto;
`;
//#endregion

//#region Favorites
export const FavoriteListContainer = styled.div`
  border: 2px solid var(--orange);
  border-radius: 5px;
  background-color: var(--gray);
  width: 70%;
  padding: 5px;
  margin: 20px auto 20px auto;
  display: flex;
  flex-direction: column;
`;

export const FavoriteItemContainer = styled.div`
  height: 100px;
  width: 100%;
  margin: 20px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    width: 70px;
  }
`;
//#endregion

//#region Pagination
export const PaginationButton = styled.button`
  border: none;
  color: var(--white);
  background-color: var(--orange);
  padding: 5px;
  margin: 10px;
  width: 75px;
  cursor: pointer;
  border-radius: 5px;
`;

export const PaginationContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: var(--gray);
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 0px;
  left: 0px;
`;
//#endregion

//#region Header
export const HeaderContainer = styled.div`
  ${Variables};

  width: 100%;
  height: 100px;
  background-color: var(--orange);
`;

export const HeaderContent = styled.nav`
  width: 80%;
  height: 100px;

  margin: 0 auto;
  align-items: center;
  display: flex;

  ul {
    flex-grow: 1;
    display: flex;
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
  background-color: #fff;
  padding: 50px;
  z-index: 1000;
  left: 50%;
  top: 50%;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

//#endregion
