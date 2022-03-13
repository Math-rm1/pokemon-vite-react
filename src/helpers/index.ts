import { Pokemon } from '../types/Pokemon';

export const upperPokeName = (name: string) =>
  `${name[0].toUpperCase() + name.substring(1)}`;

export const replaceSpStat = (statName: string) => {
  return statName.includes('special')
    ? statName.replace('special', 'sp')
    : statName;
};

export const hasPokemon = (favoritePokemons: Pokemon[], pokemon: Pokemon) =>
  favoritePokemons.some((p) => p.id === pokemon.id);
