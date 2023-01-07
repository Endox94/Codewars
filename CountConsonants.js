function consonantCount(str) {
  return str.replace(/[^a-z]/gi, '').replace(/[aeiou]/gi, '').length;
}