import React from 'react';
import { FavoriteItemContainer } from '../styles/styles';
import { FaTrashAlt } from 'react-icons/fa';
import { FavoriteItemProps } from '../types/FavoriteItemProps';

export default function FavoriteItem({
  pokemon,
  handleRemove,
}: FavoriteItemProps) {
  const img =
    pokemon.sprites.other?.['official-artwork'].front_default ||
    pokemon.sprites.front_default;
  return (
    <FavoriteItemContainer>
      <img src={img} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <span>{pokemon.id}</span>
      <FaTrashAlt
        style={{ cursor: 'pointer' }}
        onClick={() => handleRemove(pokemon.id)}
      />
    </FavoriteItemContainer>
  );
}
