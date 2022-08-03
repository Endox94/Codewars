function squareDigits(num){
    let squared = num.toString();
    let result = ''
    
    for (let i = 0; i < squared.length; i++){
      result += squared[i] * squared[i];
    }
    
    return Number(result);
  }