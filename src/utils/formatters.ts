export const formatNumber = (num: number | string, decimals: number = 1): string => {
  const n = typeof num === 'string' ? parseFloat(num) : num;
  if (isNaN(n)) return '0';

  const parts = n.toFixed(decimals).split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return parts.join('.');
};

export const formatPercent = (num: number | string, decimals: number = 2): string => {
  const n = typeof num === 'string' ? parseFloat(num) : num;
  if (isNaN(n)) return '0%';

  return `${n.toFixed(decimals)}%`;
};

export const formatInteger = (num: number | string): string => {
  const n = typeof num === 'string' ? parseInt(num) : num;
  if (isNaN(n)) return '0';

  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const getValueColorClass = (value: number, isGoodWhenHigh: boolean = true): string => {
  if (value === 0) return 'text-gray-700';

  if (isGoodWhenHigh) {
    return value > 0 ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold';
  } else {
    return value > 0 ? 'text-red-600 font-semibold' : 'text-green-600 font-semibold';
  }
};

export const getTrendColorClass = (trend: 'up' | 'down' | 'neutral', isGoodWhenUp: boolean = true): string => {
  if (trend === 'neutral') return 'text-gray-700';

  if (isGoodWhenUp) {
    return trend === 'up' ? 'text-green-600' : 'text-red-600';
  } else {
    return trend === 'up' ? 'text-red-600' : 'text-green-600';
  }
};

export const getRateColorClass = (rate: number, goodThreshold: number = 95, badThreshold: number = 85): string => {
  if (rate >= goodThreshold) return 'text-green-600 font-semibold';
  if (rate <= badThreshold) return 'text-red-600 font-semibold';
  return 'text-yellow-600 font-semibold';
};

export const getPercentageColorClass = (
  percentage: number,
  type: 'interception' | 'killrate' | 'accuracy' | 'negative' = 'interception'
): string => {
  switch (type) {
    case 'interception':
      if (percentage >= 95) return 'text-green-600 font-semibold';
      if (percentage >= 85) return 'text-yellow-600 font-semibold';
      return 'text-red-600 font-semibold';

    case 'killrate':
      if (percentage >= 90) return 'text-green-600 font-semibold';
      if (percentage >= 80) return 'text-yellow-600 font-semibold';
      return 'text-red-600 font-semibold';

    case 'accuracy':
      if (percentage >= 98) return 'text-green-600 font-semibold';
      if (percentage >= 95) return 'text-yellow-600 font-semibold';
      return 'text-red-600 font-semibold';

    case 'negative':
      if (percentage <= 5) return 'text-green-600 font-semibold';
      if (percentage <= 10) return 'text-yellow-600 font-semibold';
      return 'text-red-600 font-semibold';

    default:
      return 'text-gray-700';
  }
};
