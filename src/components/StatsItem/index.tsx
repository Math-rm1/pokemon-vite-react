import React from 'react';
import { replaceSpStat } from '../../helpers';
import { StyledStatsItem } from '../../styles/Styles';
import { StatsItemProps } from '../../types/StatsItemProps';

function StatsItem({ name, value }: StatsItemProps) {
  return (
    <StyledStatsItem>
      <h4>{replaceSpStat(name)}</h4>
      <progress max={100} value={value} />
    </StyledStatsItem>
  );
}
export default StatsItem;
