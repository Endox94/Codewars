function reverseLetter(str) {
  return str.replace(/[^A-Z]/gi, '').split('').reverse().join('');
}