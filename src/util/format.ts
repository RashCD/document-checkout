import { PREFERENCES } from './user';

export const priceString = new Intl.NumberFormat(PREFERENCES.language, {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

export const priceNumberFormat = (price: number): number =>
  Math.round((price + Number.EPSILON) * 100) / 100;
