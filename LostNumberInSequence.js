function findDeletedNumber(arr, mixArr) {
  if (arr.length == mixArr.length){
    return 0;
  }
    
  for (let i = 0; i < arr.length; i++){
    if (mixArr.includes(arr[i]) == false){
      return arr[i];
    }
  }
}