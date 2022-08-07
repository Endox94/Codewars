function sumDigPow(a, b) {
    let arr = [];
    
    for (let i = a; i <= b; i++){
      let n = i.toString().split('');
      let num = 0;
      
      for (let j = 0; j < n.length; j++){
        num += Number(n[j]) ** (j+1);
      }
      
      if (num == i){
        arr.push(i);
      }
      
    }
    return arr;
  }