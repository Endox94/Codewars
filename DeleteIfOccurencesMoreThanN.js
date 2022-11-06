function deleteNth(arr,n){
    let resArr = [];
    
    for (let i = 0; i < arr.length; i++){
      if (resArr.filter(x => x == arr[i]).length < n){
        resArr.push(arr[i]);
      }
    }
    return resArr;
  }