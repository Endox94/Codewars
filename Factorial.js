function factorial(n){
    if (n < 0 || n > 12){
      throw new RangeError('n must be between 0 and 12');
    } else {
      let arr = [];
      for (let i = 1; i <= n; i++){
        arr.push(i);
      }
      return arr.reduce((acc, c) => acc * c, 1);
    }
  }