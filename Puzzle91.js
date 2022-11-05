function oneTwoThree(n) {
    let nums = '';
    let Q = '';
    
    if (n == 0 || n == 1){
      Q = n;
      nums = n;
    }
    if (n < 9){
      Q = n;
    }
    
    while (nums.length < n){
      nums += '1';
    }
    
    let firsts = Math.floor(n/9);
    if (n > 9){
      for (let i = 0; i < firsts; i++){
      Q += '9';
      }
    }
    
    let snds = n % 9;
    if (n > 9 && n % 9 != 0){
      Q += `${snds}`;
    }
    
    return [`${Q}`, `${nums}`];
  }