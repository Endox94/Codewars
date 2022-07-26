function persistence(num) {
    let i = 0;
    
    while (num > 9){
      num = num.toString().split('').reduce((acc, c) => acc * Number(c) , 1);
      i++;
    }
    
    return i;
  }