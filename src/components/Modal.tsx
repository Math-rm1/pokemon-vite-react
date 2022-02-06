import React from 'react';
import reactDom from 'react-dom';
import { ModalContainer, Overlay } from '../styles/styles';
import { ModalProps } from '../types/ModalProps';

export default function Modal({ detailedPokemon, open, onClose }: ModalProps) {
  if (!open || !detailedPokemon) return null;

  return reactDom.createPortal(
    <>
      <Overlay onClick={onClose} />
      <ModalContainer>
        <button onClick={onClose}>Close Modal</button>
        <h2>{detailedPokemon.name}</h2>
        <p>{detailedPokemon.id}</p>
        <img
          src={
            detailedPokemon.sprites.other?.['official-artwork'].front_default ||
            detailedPokemon.sprites.front_default
          }
          alt={detailedPokemon.name}
        />
      </ModalContainer>
    </>,
    document.getElementById('portal') as HTMLElement,
  );
}
