function removeConsecutiveDuplicates (s){
    let arr = s.split(' ');
    for (let i = 0; i < arr.length; i++){
      if (arr[i] == arr[i+1]){
        arr.splice(i+1, 1);
        i--;
      }
    }
    return arr.join(' ');
  }