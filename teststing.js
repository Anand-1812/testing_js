export function sum(a, b) {
  return a + b;
}

export function capitalize(str) {
  const part1 = str.charAt(0).toUpperCase();
  const part2 = str.slice(1);
  return part1 + part2;
}

export function reverseStr(str) {
  return str.split('').reverse().join('');
}