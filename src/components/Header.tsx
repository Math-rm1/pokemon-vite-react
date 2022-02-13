import React from 'react';
import { HeaderContainer, HeaderContent } from '../styles/styles';
import { BsBookmarkStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
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
      </HeaderContent>
    </HeaderContainer>
  );
}
