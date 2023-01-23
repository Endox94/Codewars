function mergesorted(a, b) {
  let arr = [];
  let concatted = a.concat(b);
  
  for (let i = 0; i < concatted.length; i++){
    if (concatted[i] == Math.min(...concatted)){
      arr.push(concatted[i]);
      concatted.splice(i, 1);
      i = -1;
    }
  }
  return arr;
}