import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FavoriteListContainer, FavoriteListEmpty } from '../styles/styles';
import { Pokemon } from '../types/Pokemon';
import FavoriteItem from './FavoriteItem';

export default function FavoriteList() {
  const [favoritePokemons, setFavoritePokemons] = useState<Pokemon[]>([]);

  const upperPokeName = (name: string) =>
    `${name[0].toUpperCase() + name.substring(1)}`;

  const handleRemove = (id: number, name: string) => {
    setFavoritePokemons(
      favoritePokemons.filter(p => {
        return p.id !== id;
      }),
    );
    const pokemonName = upperPokeName(name);
    toast.success(`${pokemonName} removed from favorites!`);
  };

  useEffect(() => {
    const data = localStorage.getItem('favoritePokemons');
    if (data) setFavoritePokemons(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('favoritePokemons', JSON.stringify(favoritePokemons));
  }, [favoritePokemons]);

  return (
    <>
      <Toaster reverseOrder={false} />
      {favoritePokemons.length > 0 ? (
        <FavoriteListContainer>
          {favoritePokemons.map(p => (
            <FavoriteItem
              key={`${p.id} - ${p.name}`}
              pokemon={p}
              handleRemove={handleRemove}
            />
          ))}
        </FavoriteListContainer>
      ) : (
        <FavoriteListEmpty>
          <h2>Add a pokémon to your favorites!</h2>
        </FavoriteListEmpty>
      )}
    </>
  );
}
