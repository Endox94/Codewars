function findEvenIndex(arr){
    for (let i = 0; i < arr.length; i++){
      let left = arr.slice(0,i).reduce((acc,c)=> acc + c, 0);
      let right = arr.slice(i+1).reduce((sum,n)=> sum + n, 0);
      if (left == right){
        return i;
      }
    }
    
    return -1;
  }