import React from 'react';
import { CardContainer } from '../styles/styles';
import { CardProps } from '../typings/CardProps';

export default function Card(props: CardProps) {
  const pokeUrl =
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png';

  return (
    <CardContainer>
      <img src={pokeUrl} alt='Bulbasaur' />
      <h2>{props.name}</h2>
      <span>Nº 001</span>
      <div>
        <span>Grass</span>
        <span>Poison</span>
      </div>
    </CardContainer>
  );
}
