import { sum, capitalize, reverseStr, Calculator } from './teststing';
import { caeserCipher } from './caeser_cipher';

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

// calculator test
test('checks caluclator validity', () => {
  const calc = new Calculator();
  expect(calc.add(2, 3)).toBe(5);
  expect(calc.sub(3, 2)).toBe(1);
  expect(calc.multiply(2, 4)).toBe(8);
  expect(calc.divide(4, 2)).toBe(2);
});

// caeser cipher test
test('caeser cipher ...', () => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  expect(caeserCipher('xyz', 3, alphabet)).toBe('abc');
})