import { sum, capitalize } from './teststing';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('returns capitalized string', () => {
  expect(capitalize('anand')).toBe('Anand');
});