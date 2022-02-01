import React from 'react';
import { HeaderContainer, HeaderContent } from '../styles/styles';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <ul>
          <li>
            <Link to='/'>Pokémon React</Link>
          </li>

          <li>
            <Link to='/favorites'>Favorites</Link>
          </li>
        </ul>
      </HeaderContent>
    </HeaderContainer>
  );
}
