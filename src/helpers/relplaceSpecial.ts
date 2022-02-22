export const replaceSpStat = (statName: string) => {
  if (statName.includes('special')) {
    return statName.replace('special', 'sp');
  }
  return statName;
};
