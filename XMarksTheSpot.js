const xMarksTheSpot = (input) => {
  if (input == []){
    return [];
  }
  
  let res = [];
  
  for (let i = 0; i < input.length; i++){
    for (let j = 0; j < input[0].length; j++){
      if (input[i][j] == 'x'){
        res.push(i);
        res.push(j);
      }
    }
  }
  
  if (res.length != 2){
    return [];
  } else {
    return res;
  }
}