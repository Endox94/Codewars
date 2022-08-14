function nbDig(n, d) {
    let count = 0;
    
    for (let i = 0; i <= n; i++){
      let num = i**2;
      count += num.toString().split('').filter(x => x == d).length;
    }
    
    return count;
  }