import styled from 'styled-components';
import Variables from './Variables';

export const PaginationButton = styled.button`
  border: none;
  color: var(--white);
  background-color: var(--blue);
  padding: 5px;
`;

export const PaginationContainer = styled.div`
  width: 100%;
  background-color: lightgray;
  height: 100px;
`;

export const HeaderContainer = styled.div`
  ${Variables};

  width: 100%;
  height: 100px;
  background-color: var(--blue);
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

  background-color: lightskyblue;
  align-items: center;
`;
