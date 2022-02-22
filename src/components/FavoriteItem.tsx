import React, { useState } from 'react';
import { StyledFavItem } from '../styles/styles';
import { FaTrashAlt } from 'react-icons/fa';
import { FavoriteItemProps } from '../types/FavoriteItemProps';
import { FaRegImages } from 'react-icons/fa';

export default function FavoriteItem({
  pokemon,
  handleRemove,
}: FavoriteItemProps) {
  const [inGameImg, setInGameImg] = useState<boolean>(false);

  const imgOA = pokemon.sprites.other?.['official-artwork'].front_default;
  const imgGame = pokemon.sprites.front_default;

  return (
    <StyledFavItem>
      <img src={!inGameImg ? imgOA : imgGame} alt={pokemon.name} />
      <h4>{pokemon.name}</h4>
      <FaRegImages
        onClick={() => setInGameImg(prevInGameImg => !prevInGameImg)}
      />
      <FaTrashAlt onClick={() => handleRemove(pokemon.id, pokemon.name)} />
    </StyledFavItem>
  );
}
