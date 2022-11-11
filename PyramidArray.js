function pyramid(n) {
    let arr = [];
    
    for (let i = 0; i < n; i++){
      let temp = [];
      for (let j = 0; j < i+1; j++){
        temp.push(1);
      }
      arr.push(temp);
    }
    
    return arr;
  }