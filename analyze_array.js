export function analyzeArray(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  const average = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    average,
    min,
    max,
    length: arr.length
  }
}