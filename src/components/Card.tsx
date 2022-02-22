import React, { useEffect, useState } from 'react';
import { FaStar, FaRegStar, FaArrowAltCircleRight } from 'react-icons/fa';
import {
  StyledCard,
  StyledCardTop,
  StyledDetails,
  StyledTypes,
  StyledType,
} from '../styles/styles';
import { CardProps } from '../types/CardProps';
import { typeColors } from '../colors/TypeColors';
import { hasPokemon } from '../helpers/hasPokemon';

export default function Card({
  pokemon,
  favoritePokemons,
  handleFavorite,
  handleOpenModal,
}: CardProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    if (hasPokemon(favoritePokemons, pokemon)) setIsFavorite(true);
  }, [isFavorite]);

  const img =
    pokemon.sprites.other?.['official-artwork'].front_default ||
    pokemon.sprites.front_default;

  const Star = isFavorite ? FaStar : FaRegStar;

  return (
    <StyledCard
      mainColor={`#${
        typeColors[pokemon.types[0].type.name as keyof typeof typeColors]
      }`}
    >
      <StyledCardTop>
        <span>#{pokemon.id}</span>
        <Star
          color={isFavorite ? '#fbc706' : 'white'}
          size={24}
          onClick={() => {
            handleFavorite(pokemon);
            setIsFavorite(!isFavorite);
          }}
        />
      </StyledCardTop>
      <img src={img} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <StyledTypes>
        {pokemon.types.map(t => (
          <StyledType
            typeColor={`#${typeColors[t.type.name as keyof typeof typeColors]}`}
            key={`${pokemon.id} - ${t.type.name}`}
          >
            {t.type.name}
          </StyledType>
        ))}
      </StyledTypes>
      <StyledDetails onClick={() => handleOpenModal(pokemon)}>
        <h3>Details</h3>
        <FaArrowAltCircleRight />
      </StyledDetails>
    </StyledCard>
  );
}
