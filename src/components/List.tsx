import React, { useState } from 'react';
import {
  ListContainer,
  ListContent,
  ListInputContainer,
} from '../styles/styles';
import Card from './Card';
import Modal from './Modal';

export default function List() {
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
          {pokeList
            ?.filter(p => {
              if (!search) return p;
              if (p.toLowerCase().includes(search.toLowerCase())) return p;
            })
            .map(p => (
              <Card key={p + 1} name={p} />
            ))}
        </ListContent>
      </ListContainer>
      {/* <Modal /> */}
    </>
  );
}
