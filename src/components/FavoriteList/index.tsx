import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { upperPokeName } from '../../helpers';
import { StyledFavListContent, StyledFavListEmpty } from '../../styles/Styles';
import toastStyles from '../../styles/ToastStyles';
import { Pokemon } from '../../types/Pokemon';
import Delay from '../Delay';
import FavoriteItem from '../FavoriteItem';

function FavoriteList() {
  const [favoritePokemons, setFavoritePokemons] = useState<Pokemon[]>([]);

  const handleRemove = (id: number, name: string) => {
    setFavoritePokemons((prevFavPokemons) =>
      prevFavPokemons.filter((p) => p.id !== id),
    );

    const pokemonName = upperPokeName(name);
    toast.success(`${pokemonName} removed from your favorites!`);
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
      <Toaster
        toastOptions={{
          style: toastStyles,
        }}
        reverseOrder={false}
      />
      {favoritePokemons.length > 0 ? (
        <StyledFavListContent>
          {favoritePokemons.map((p) => (
            <FavoriteItem
              key={`${p.id} - ${p.name}`}
              pokemon={p}
              handleRemove={handleRemove}
            />
          ))}
        </StyledFavListContent>
      ) : (
        <StyledFavListEmpty>
          <Delay ms={750}>
            <h2>Add a favorite pokémon!</h2>
          </Delay>
        </StyledFavListEmpty>
      )}
    </>
  );
}

export default FavoriteList;
