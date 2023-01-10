function findLowestInt(k) {
    let k2 = k + 1;
    for (let i = 1; i < 1000000000; i++){
      if ((k*i).toString().split('').sort().join('') == (k2*i).toString().split('').sort().join('')){
        return i;
      }
    }
    return 0;
  }