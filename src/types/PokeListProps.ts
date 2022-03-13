import { Pokemon } from './Pokemon';

export type PokeListProps = {
  pokemonList: Pokemon[] | null;
  isLoading: boolean;
  error: string | null;
};
