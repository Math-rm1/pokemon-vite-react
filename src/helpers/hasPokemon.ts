import { Pokemon } from '../types/Pokemon';

export const hasPokemon = (favoritePokemons: Pokemon[], pokemon: Pokemon) =>
  favoritePokemons.some(p => p.id === pokemon.id);
