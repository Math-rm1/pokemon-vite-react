import React, { useEffect, useState } from 'react';
import { FaStar, FaRegStar, FaArrowAltCircleRight } from 'react-icons/fa';
import {
  CardContainer,
  DetailsContainer,
  IconContainer,
  TypesContainer,
} from '../styles/styles';
import { CardProps } from '../types/CardProps';
import { typeColors } from '../colors/TypeColors';

export default function Card({
  pokemon,
  favoritePokemons,
  handleFavorite,
  handleOpenModal,
}: CardProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    const hasPokemon = favoritePokemons.some(p => p.id === pokemon.id);
    if (hasPokemon) setIsFavorite(true);
  }, [isFavorite]);

  const img =
    pokemon.sprites.other?.['official-artwork'].front_default ||
    pokemon.sprites.front_default;

  const Star = isFavorite ? FaStar : FaRegStar;

  return (
    <CardContainer>
      <IconContainer>
        <Star
          color={isFavorite ? '#fbc706' : 'white'}
          size={20}
          style={{ cursor: 'pointer' }}
          onClick={() => {
            handleFavorite(pokemon);
            setIsFavorite(!isFavorite);
          }}
        />
      </IconContainer>
      <img src={img} alt={pokemon.name} />
      <h2>
        {pokemon.name} #{pokemon.id}
      </h2>
      <TypesContainer>
        {pokemon.types.map(t => (
          <span
            style={{
              backgroundColor: `#${
                typeColors[t.type.name as keyof typeof typeColors]
              }`,
            }}
            key={`${pokemon.id} - ${t.type.name}`}
          >
            {t.type.name}
          </span>
        ))}
      </TypesContainer>
      <DetailsContainer onClick={() => handleOpenModal(pokemon)}>
        <span>Details</span>
        <FaArrowAltCircleRight />
      </DetailsContainer>
    </CardContainer>
  );
}
