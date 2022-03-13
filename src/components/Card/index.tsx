import React, { useEffect, useState } from 'react';
import { FaStar, FaRegStar, FaArrowAltCircleRight } from 'react-icons/fa';
import {
  StyledCard,
  StyledCardTop,
  StyledDetails,
  StyledTypes,
  StyledType,
} from '../../styles/Styles';
import { CardProps } from '../../types/CardProps';
import { hasPokemon } from '../../helpers';
import POKEMON_TYPE_COLORS from '../../colors';
import fallbackImg from '../../img/fallback.png';

function Card({
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
        POKEMON_TYPE_COLORS[
          pokemon.types[0].type.name as keyof typeof POKEMON_TYPE_COLORS
        ]
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
      <img src={img || fallbackImg} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <StyledTypes>
        {pokemon.types.map((t) => (
          <StyledType
            typeColor={`#${
              POKEMON_TYPE_COLORS[
                t.type.name as keyof typeof POKEMON_TYPE_COLORS
              ]
            }`}
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

export default Card;
