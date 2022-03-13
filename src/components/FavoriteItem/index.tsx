import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { StyledFavItem } from '../../styles/Styles';
import { FavoriteItemProps } from '../../types/FavoriteItemProps';

function FavoriteItem({ pokemon, handleRemove }: FavoriteItemProps) {
  const imgGame = pokemon.sprites.front_default;

  return (
    <StyledFavItem>
      <img src={imgGame} alt={pokemon.name} />
      <h4>{pokemon.name}</h4>
      <FaTrashAlt onClick={() => handleRemove(pokemon.id, pokemon.name)} />
    </StyledFavItem>
  );
}

export default FavoriteItem;
