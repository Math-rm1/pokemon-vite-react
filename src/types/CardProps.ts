import { Pokemon } from './Pokemon';

export type CardProps = {
  favoritePokemons: Pokemon[];
  pokemon: Pokemon;
  handleOpenModal: (pokemon: Pokemon) => void;
  handleFavorite: (pokemon: Pokemon) => void;
};
