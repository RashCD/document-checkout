import { priceNumberFormat, priceString } from '../../util/format';

describe('Test utility function', () => {
  test('should format number correctly', () => {
    expect(priceNumberFormat(10.005)).toEqual(10.01);
    expect(priceNumberFormat(9.9)).toEqual(9.9);
    expect(priceNumberFormat(0.0000001)).toEqual(0);
    expect(priceNumberFormat(0.99999)).toEqual(1);
  });

  test('should cover weird number calculation', () => {
    expect(priceNumberFormat(NaN + NaN)).toEqual(NaN);
    expect(priceNumberFormat(1 / 0)).toEqual(Infinity);
    expect(priceNumberFormat(0 / 0)).toEqual(NaN);
    expect(priceNumberFormat(0 / 1)).toEqual(0);
    expect(priceNumberFormat(0.1 + 0.2)).toEqual(0.3);
    expect(priceNumberFormat(Number.MAX_SAFE_INTEGER)).not.toEqual(0);
  });

  test('should show correct decimal point', () => {
    expect(priceString.format(10.005)).toEqual('10.01');
    expect(priceString.format(0)).toEqual('0.00');
    expect(priceString.format(9.9)).toEqual('9.90');
    expect(priceString.format(0.0000001)).toEqual('0.00');
    expect(priceString.format(0.99999)).toEqual('1.00');
  });
});
