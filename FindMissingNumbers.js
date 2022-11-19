function findMissingNumbers(arr){
  
  let fullSeq = [];
  for (let i = arr[0]; i <= arr[arr.length-1]; i++){
    fullSeq.push(i);
  }
  let n = fullSeq.length;
  
  for (let j = 0; j < n; j++){
    fullSeq = fullSeq.filter(x => x != arr[j]);
  }
  return fullSeq;
}