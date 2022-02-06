import { Pokemon } from './Pokemon';

export type FavoriteItemProps = {
  pokemon: Pokemon;
  handleRemove: (id: number) => void;
};
