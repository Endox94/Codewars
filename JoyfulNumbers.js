function numberJoy(n) {
    let digitArr = n.toString().split('');
    return digitArr.reduce((acc, c) => acc + Number(c), 0) * Number(digitArr.reduce((acc, c) => acc + Number(c), 0).toString().split('').reverse().join('')) == n;
  }