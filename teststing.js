export function sum(a, b) {
  return a + b;
}

export function capitalize(str) {
  const part1 = str.toUpperCase().charAt(0);
  const part2 = str.slice(1);
  return part1 + part2;
}