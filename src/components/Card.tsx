import React from 'react';
import { CardContainer } from '../styles/styles';
import { CardProps } from '../typings/CardProps';

export default function Card(props: CardProps) {
  const pokeUrl =
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png';

  const img =
    props.pokemon.sprites.other?.['official-artwork'].front_default ||
    props.pokemon.sprites.front_default;

  return (
    <CardContainer>
      <img src={img} alt={props.pokemon.name} />
      <h2>{props.pokemon.name}</h2>
      <span>{props.pokemon.id}</span>
      <div>
        {props.pokemon.types.map(t => (
          <span key={props.pokemon.id + t.type.name}>{t.type.name}</span>
        ))}
      </div>
    </CardContainer>
  );
}
