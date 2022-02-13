import React from 'react';
import reactDom from 'react-dom';
import {
  ModalContainer,
  ModalLeftContainer,
  ModalRightContainer,
  Overlay,
} from '../styles/styles';
import { ModalProps } from '../types/ModalProps';
import StatsItem from './StatsItem';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

export default function Modal({ detailedPokemon, open, onClose }: ModalProps) {
  if (!open || !detailedPokemon) return null;

  const img =
    detailedPokemon.sprites.other?.['official-artwork'].front_default ||
    detailedPokemon.sprites.front_default;

  return reactDom.createPortal(
    <>
      <Overlay onClick={onClose} />
      <ModalContainer>
        <ModalLeftContainer>
          <FaArrowAltCircleLeft size={36} onClick={onClose} />
          <img src={img} alt={detailedPokemon.name} />
          <h3>{detailedPokemon.name}</h3>
          <div>
            <h4>Height: {detailedPokemon.height / 10}m</h4>
            <h4>Weight: {detailedPokemon.weight / 10}kg</h4>
          </div>
        </ModalLeftContainer>
        <ModalRightContainer>
          <div>
            <h3>Stats</h3>
            {detailedPokemon.stats.map(stat => (
              <StatsItem
                key={detailedPokemon.id + stat.stat.name}
                name={stat.stat.name}
                value={stat.base_stat}
              />
            ))}
          </div>
          <div>
            <h3>Abilities</h3>
            {detailedPokemon.abilities.map(ability => (
              <h4 key={detailedPokemon.id + ability.ability.name}>
                {ability.ability.name}
              </h4>
            ))}
          </div>
        </ModalRightContainer>
      </ModalContainer>
    </>,
    document.getElementById('portal') as HTMLElement,
  );
}
