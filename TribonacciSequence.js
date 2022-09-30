function tribonacci(signature,n){
    if (n === 0){
      return [];
    }
    
    if (n < 3){
      return signature.slice(0, n) 
    }
    
    while (signature.length < n){
      signature.push(signature.slice(-3).reduce((acc, c) => acc + c, 0))
    }
    
    return signature;
  }