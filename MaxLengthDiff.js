function mxdiflg(a1, a2) {
    if (a1.length == 0 || a2.length == 0){
      return -1;
    }
    
    let arr1 = a1.map(x => x = x.length);
    let arr2 = a2.map(x => x = x.length);
  
    return Math.abs(Math.max(...arr1) - Math.min(...arr2)) > Math.abs(Math.min(...arr1) - Math.max(...arr2)) ? Math.abs(Math.max(...arr1) - Math.min(...arr2)) : Math.abs(Math.min(...arr1) - Math.max(...arr2)); 
  }