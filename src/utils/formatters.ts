// Number formatting utilities

export const formatNumber = (value: number, decimals: number = 2): string => {
  return value.toFixed(decimals);
};

export const formatPercent = (value: number, decimals: number = 2): string => {
  return `${value.toFixed(decimals)}%`;
};

export const formatCurrency = (value: number, decimals: number = 2): string => {
  return value.toFixed(decimals);
};
