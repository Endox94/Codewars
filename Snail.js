function snail (array) {
  let res = [];
  if (array[0].length == 0){
    return res;
  }
  
  if (array[0].length == 1){
    return array[0];
  }
  let num = array.length;
  let i = 0
  
  while (num > 1){
    // right
    for (let r = i; r < num; r++){
      res.push(array[i][r]);
    }
    
    // down
    for (let d = i+1; d < num; d++){
      res.push(array[d][num-1]);
    }
    
    // left
    for (let l = num-2; l >= i; l--){
      res.push(array[num-1][l]);
    }
    
    // up
    for (let j = num-2; j > i; j--){
      res.push(array[j][i]);
    }
    num--;
    i++;
  }