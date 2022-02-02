import React, { useState } from 'react';
import {
  ListContainer,
  ListContent,
  ListInputContainer,
} from '../styles/styles';
import { Pokemon } from '../typings/Pokemon';
import Card from './Card';
import Modal from './Modal';

export type PokeListProps = {
  pokemonList: Pokemon[];
};

export default function List(props: PokeListProps) {
  const [search, setSearch] = useState<string>('');

  const pokeList: string[] = [];

  return (
    <>
      <ListContainer>
        <ListInputContainer>
          <input
            type='text'
            onChange={event => setSearch(event.target.value.trim())}
            placeholder='Search a pokémon'
          />
        </ListInputContainer>
        <ListContent>
          {props.pokemonList
            ?.filter(p => {
              if (!search) return p;
              if (p.name.toLowerCase().includes(search.toLowerCase())) return p;
            })
            .map(p => (
              <Card key={p.id} pokemon={p} />
            ))}
        </ListContent>
      </ListContainer>
      {/* <Modal /> */}
    </>
  );
}
