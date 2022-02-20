import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { hasPokemon } from '../helpers/hasPokemon';
import { upperPokeName } from '../helpers/upperCaseName';
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
  const [detailedPokemon, setDetailedPokemon] = useState<Pokemon>();
  const [favoritePokemons, setFavoritePokemons] = useState<Pokemon[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

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
    const pokemonName = upperPokeName(pokemon.name);
    if (!hasPokemon(favoritePokemons, pokemon)) {
      setFavoritePokemons(prevFavPokemons => [...prevFavPokemons, pokemon]);
      toast.success(`${pokemonName} added to your favorites!`);
      return;
    }
    setFavoritePokemons(prevFavPokemons =>
      prevFavPokemons.filter(p => p.id != pokemon.id),
    );
    toast.success(`${pokemonName} removed from your favorites!`);
  };

  return (
    <>
      <Toaster reverseOrder={false} />
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
            <h2>Loading...</h2>
          </LoadingContainer>
        )}
      </ListContainer>

      <Modal
        detailedPokemon={detailedPokemon}
        open={modalIsOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
