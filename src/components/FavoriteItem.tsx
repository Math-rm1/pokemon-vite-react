import React from 'react';
import { FavoriteItemContainer } from '../styles/styles';

export default function FavoriteItem() {
  const pokeUrl =
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png';

  return (
    <FavoriteItemContainer>
      <img src={pokeUrl} alt='Bulbasaur' />
      <h2>Bulbasaur</h2>
      <span># 001</span>
      <span>Excluir</span>
    </FavoriteItemContainer>
  );
}
