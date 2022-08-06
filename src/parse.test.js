import calculate from './parse';

describe('#calculate', () => {
  describe('basic operations', () => {
    test('it returns single value', () => {
      expect(calculate('0.2')).toBe(0.2);
    });

    test('it adds decimals', () => {
      expect(calculate('0.2 + 0.1')).toBe(0.30000000000000004);
    });

    test('it subtracts decimals', () => {
      expect(calculate('0.2 - 0.6')).toBe(-0.39999999999999997);
    });

    test('it multiplies decimals', () => {
      expect(calculate('0.6 * 0.2')).toBe(0.12);
    });

    test('it divides decimals', () => {
      expect(calculate('0.6 / 0.3')).toBe(2);
    });
    test('it raises to power', () => {
      expect(calculate('0.6 ^ 2')).toBe(0.36);
    });
    test('it adds big numbers', () => {
      expect(calculate('10000000000 + 10000000000')).toBe(20000000000);
    });

    test('it subtracts big numbers', () => {
      expect(calculate('20000000000 - 14000000000')).toBe(6000000000);
    });

    test('it multiplies big numbers', () => {
      expect(calculate('1000000000 * 50')).toBe(50000000000);
    });

    test('it divides big numbers', () => {
      expect(calculate('60000000000 / 20000000000')).toBe(3);
    });

    test('it raises big numbers to a positive power', () => {
      expect(calculate('10 ^ 30')).toBe(1e30);
    });

    test('it raises big numbers to a negative power', () => {
      expect(calculate('10 ^ (-30)')).toBe(1e-30);
    });
  });

  describe('order of operations and parentheses', () => {
    test('performs operations in the right order without parentheses', () => {
      const expression = '5 + 6*5/2 - 3^2';

      expect(calculate(expression)).toBe(11);
    });

    test('performs operations in the right order with single parentheses', () => {
      const expression = '(5 + 5)*5/2 - 3^2';

      expect(calculate(expression)).toBe(16);
    });

    test('performs operations in the right order with multiple parentheses', () => {
      const expression = '((10 + 2)/2)*5/2 - 3^2';

      expect(calculate(expression)).toBe(6);
    });
  });
});
