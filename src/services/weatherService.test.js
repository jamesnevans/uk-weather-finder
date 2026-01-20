import { convertToMph } from './weatherService';

describe('weatherService', () => {
  test('convertToMph converts meters per second to miles per hour', () => {
    expect(convertToMph(5)).toBe('11.19');
    expect(convertToMph(10)).toBe('22.37');
    expect(convertToMph(0)).toBe('0.00');
  });
});