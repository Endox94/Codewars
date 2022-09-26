function narcissistic(value) {
    let str = value.toString().split('');
    return str.reduce((acc, c) => acc + c ** (str.length), 0) == value;
  }