import React from 'react';
import { StyledHeader, StyledHeaderContent } from '../styles/styles';
import { BsBookmarkStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <StyledHeader>
      <StyledHeaderContent>
        <ul>
          <li>
            <Link to='/'>
              <h1>Pokédex</h1>
            </Link>
          </li>

          <li>
            <Link to='/favorites'>
              <BsBookmarkStarFill size={30} />
            </Link>
          </li>
        </ul>
      </StyledHeaderContent>
    </StyledHeader>
  );
}
