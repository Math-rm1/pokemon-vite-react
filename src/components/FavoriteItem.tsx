import React from 'react';
import { StyledFavItem } from '../styles/styles';
import { FaTrashAlt } from 'react-icons/fa';
import { FavoriteItemProps } from '../types/FavoriteItemProps';

export default function FavoriteItem({
  pokemon,
  handleRemove,
}: FavoriteItemProps) {
  const imgGame = pokemon.sprites.front_default;

  return (
    <StyledFavItem>
      <img src={imgGame} alt={pokemon.name} />
      <h4>{pokemon.name}</h4>
      <FaTrashAlt onClick={() => handleRemove(pokemon.id, pokemon.name)} />
    </StyledFavItem>
  );
}
