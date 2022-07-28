function rowSumOddNumbers(n) {
  
    let arr = [];
    
    for (let i = 1; i <= n*(n+1); i++){
      if (i%2 != 0){
        arr.push(i);
      }
    }
    
    return arr.slice(((n/2)*(n-1)),((n/2)*(n-1)+n)).reduce((acc,e) => acc + e, 0);
  }