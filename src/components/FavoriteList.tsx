import React, { useEffect, useState } from 'react';
import { FavoriteListContainer } from '../styles/styles';
import { Pokemon } from '../types/Pokemon';
import FavoriteItem from './FavoriteItem';

export default function FavoriteList() {
  const [favoritePokemons, setFavoritePokemons] = useState<Pokemon[]>([]);

  const handleRemove = (id: number) => {
    setFavoritePokemons(
      favoritePokemons.filter(p => {
        return p.id !== id;
      }),
    );
  };

  useEffect(() => {
    const data = localStorage.getItem('favoritePokemons');
    if (data) setFavoritePokemons(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('favoritePokemons', JSON.stringify(favoritePokemons));
  }, [favoritePokemons]);

  return (
    <FavoriteListContainer>
      {favoritePokemons?.map(p => {
        return (
          <FavoriteItem
            key={`${p.id} - ${p.name}`}
            pokemon={p}
            handleRemove={handleRemove}
          />
        );
      })}
    </FavoriteListContainer>
  );
}
