function solution(a) {
    let count = 0;
    let i = 0;
    
    while (i >= 0 && i < a.length){
      if (count > a.length){
        return -1;
      }
      
      i += a[i];
      count++;
    }
    
    return count;
  }