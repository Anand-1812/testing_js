const { default: test } = require('node:test');
const { sum } = require('./tests');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('returns capitalized')