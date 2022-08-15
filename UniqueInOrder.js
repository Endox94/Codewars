function uniqueInOrder (iterable){
  let arr;
  
  if (typeof iterable == 'string'){
    arr = iterable.split('');
  } else if (Array.isArray(iterable) == true){
    arr = iterable;
  }
  
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === arr[i+1]){
      arr.splice(i+1, 1);
      i--;
    }
  }
  
  return arr;
}