function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce((acc, c) => acc + Number(c), 0);
  }