function longestRepetition(s) {
    if (s.length == 0){
      return ["", 0];
    }
    let sArr = s.split('');
    let arr = [];
    
    let count = 1;
  
    for (let i = 0; i < sArr.length; i++){
      if (sArr[i] == sArr[i+1]){
        count++;
      } else if (sArr[i] != sArr[i+1]){
        arr.push(count);
        count = 1;
      }
    }
    let ind = arr.indexOf(Math.max(...arr));
    let c = 0;
    for (let j = 0; j < ind; j++){
      c += arr[j];
    }
    return [sArr[c], Math.max(...arr)];
  }