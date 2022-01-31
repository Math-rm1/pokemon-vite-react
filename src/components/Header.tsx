import React from 'react';
import { HeaderContainer, HeaderContent } from '../styles/styles';

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <ul>
          <li>
            <a>Pokémon React</a>
          </li>

          <li>
            <a>Favorites</a>
          </li>
        </ul>
      </HeaderContent>
    </HeaderContainer>
  );
}
