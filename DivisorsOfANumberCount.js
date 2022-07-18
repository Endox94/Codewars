function getDivisorsCnt(n){
    let count = 1;
    for (let i = 0; i < n; i++){
      if (n % i == 0){
        count++;
      }
    }
    return count;
  }