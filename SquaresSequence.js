function squares(x, n) {
    let arr = [];
    for (let i = 0; i < n; i++){
      if (i == 0){
        arr.push(x);
      } else {
        arr.push(arr[i-1]**2);
      }
    }
    return arr;
  }