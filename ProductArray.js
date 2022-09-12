function productArray(numbers){
    let res = [];
    
    for (let i = 0; i < numbers.length; i++){
      res.push(numbers.reduce((acc, c) => acc * c, 1)/numbers[i]);
    }
    
    return res;
  }