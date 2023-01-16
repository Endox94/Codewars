function moveZeros(arr) {
  let n = arr.filter(x => x === 0).length;
  let res = arr.filter(x => x !== 0);
  for (let i = 0; i < n; i++){
    res.push(0);
  }
  
  return res;
}