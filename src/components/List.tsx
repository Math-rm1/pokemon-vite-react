import React, { useEffect, useState } from 'react';
import {
  ListContainer,
  ListContent,
  ListInputContainer,
  LoadingContainer,
} from '../styles/styles';
import { PokeListProps } from '../types/PokeListProps';
import { Pokemon } from '../types/Pokemon';
import Card from './Card';
import Modal from './Modal';

export default function List({ pokemonList, isLoading }: PokeListProps) {
  const [favoritePokemons, setFavoritePokemons] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState<string>('');
  const [detailedPokemon, setDetailedPokemon] = useState<Pokemon>();
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const data = localStorage.getItem('favoritePokemons');
    if (data) setFavoritePokemons(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('favoritePokemons', JSON.stringify(favoritePokemons));
  }, [favoritePokemons]);

  const handleCloseModal = (event: React.MouseEvent) => {
    event.stopPropagation();
    setModalIsOpen(false);
  };

  const handleOpenModal = (pokemon: Pokemon) => {
    setDetailedPokemon(pokemon);
    setModalIsOpen(true);
  };

  const handleFavorite = (pokemon: Pokemon) => {
    const hasPokemon = favoritePokemons.some(p => p.id === pokemon.id);

    if (!hasPokemon) {
      setFavoritePokemons(favoritePokemons => [...favoritePokemons, pokemon]);
    } else {
      setFavoritePokemons(favoritePokemons.filter(p => p.id != pokemon.id));
    }
  };

  return (
    <>
      <ListContainer>
        <ListInputContainer>
          <input
            type='search'
            onChange={event => setSearch(event.target.value.trim())}
            placeholder='Search a pokémon'
          />
        </ListInputContainer>
        {!isLoading ? (
          <ListContent>
            {pokemonList
              ?.filter(p => {
                if (!search) return p;
                if (p.name.toLowerCase().includes(search.toLowerCase()))
                  return p;
              })
              .map(p => (
                <Card
                  key={p.id}
                  pokemon={p}
                  favoritePokemons={favoritePokemons}
                  handleOpenModal={handleOpenModal}
                  handleFavorite={handleFavorite}
                />
              ))}
          </ListContent>
        ) : (
          <LoadingContainer>
            <h2>Carregando...</h2>
          </LoadingContainer>
        )}
      </ListContainer>
      {
        <Modal
          detailedPokemon={detailedPokemon}
          open={modalIsOpen}
          onClose={handleCloseModal}
        />
      }
    </>
  );
}
