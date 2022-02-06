import React from 'react';
import { HeaderContainer, HeaderContent } from '../styles/styles';
import { BsBookmarkStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import PokemonLogo from '../assets/pokemon-logo.svg';

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <ul>
          <li>
            <Link to='/'>
              <img src={PokemonLogo} alt='Pokémon Logo' />
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
