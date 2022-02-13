import React from 'react';
import { StatsItemContainer } from '../styles/styles';

export type StatsItemProps = {
  name: string;
  value: number;
};

export default function StatsItem({ name, value }: StatsItemProps) {
  return (
    <StatsItemContainer>
      <h4>{name}</h4>
      <progress max={100} value={value} />
    </StatsItemContainer>
  );
}
