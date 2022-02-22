import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaSearch } from 'react-icons/fa';
import { hasPokemon } from '../helpers/hasPokemon';
import { upperPokeName } from '../helpers/upperCaseName';
import {
  StyledList,
  StyledListContent,
  StyledInputWrapper,
  StyledLoading,
} from '../styles/styles';
import { toastStyles } from '../styles/toastStyles';
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
      <Toaster
        toastOptions={{
          style: toastStyles,
        }}
        reverseOrder={false}
      />
      <StyledList>
        <StyledInputWrapper>
          <input
            id='search'
            type='search'
            onChange={event => setSearch(event.target.value.trim())}
            placeholder='Search for a pokemon by name'
          />
          <label htmlFor='search'>
            <FaSearch size={24} />
          </label>
        </StyledInputWrapper>
        {!isLoading ? (
          <StyledListContent>
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
          </StyledListContent>
        ) : (
          <StyledLoading>
            <h2>Loading...</h2>
          </StyledLoading>
        )}
      </StyledList>

      <Modal
        detailedPokemon={detailedPokemon}
        open={modalIsOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
