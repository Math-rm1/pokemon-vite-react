import React from 'react';
import { replaceSpStat } from '../helpers/relplaceSpecial';
import { StyledStatsItem } from '../styles/styles';

export type StatsItemProps = {
  name: string;
  value: number;
};

export default function StatsItem({ name, value }: StatsItemProps) {
  return (
    <StyledStatsItem>
      <h4>{replaceSpStat(name)}</h4>
      <progress max={100} value={value} />
    </StyledStatsItem>
  );
}
