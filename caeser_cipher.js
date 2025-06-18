function convert(char, key, alphabet) {
  if (char === ' ') return char;

  const isUpper = char === char.toUpperCase();
  char = char.toLowerCase();

  const idx = alphabet.indexOf(char);
  if (idx === -1) return char;

  const cipherIdx = (idx + key) % alphabet.length;
  const newChar = alphabet[cipherIdx];

  return isUpper ? newChar.toUpperCase() : newChar;
}

export function caeserCipher(string, key, alphabet) {
  key = parseInt(key, 10);
  const result = string.split('').map(char => convert(char, key, alphabet));
  return result.join('');
}