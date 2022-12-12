function cupAndBalls(b, arr){
  if (arr[0] == undefined){
    return b;
  }
  for (let i = 0; i < arr.length; i++){
    if (arr[i].includes(b) && arr[i][0] != arr[i][1]){
      b = arr[i].filter(x => x != b)[0];
    }
  }
  return b;
}