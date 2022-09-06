function digPow(n, p){
    let arr = n.toString().split('');
    let res;
    
    res = arr.map((x,ind) => x ** (p+ind)).reduce((acc, c) => acc + c, 0);
    
    for (let i = 1; i <= 99999; i++){
      if (n * i == res){
        return i;
      }
    }
    
    return -1;
  }