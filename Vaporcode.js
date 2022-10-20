function vaporcode(string) {
    return string.toUpperCase().split(' ').join('').split('').map(x => x + '  ').join('').trim();
  }