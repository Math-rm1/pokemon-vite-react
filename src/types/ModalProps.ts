import { Pokemon } from './Pokemon';

export type ModalProps = {
  detailedPokemon?: Pokemon;
  open: boolean;
  onClose: (event: React.MouseEvent) => void;
};
