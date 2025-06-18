import { sum, capitalize, reverseStr } from './teststing';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// Capitalized test
test('returns capitalized string', () => {
  expect(capitalize('anand')).toBe('Anand');
});

// reverse test
test('return reversed string', () => {
  expect(reverseStr('anand')).toBe('dnana');
});