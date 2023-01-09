function duplicateCount(text){
    let count = 0;
    let arr = text.toLowerCase().split('');
    
    for (let i = 0; i < text.length; i++){
      if (arr.filter(x => x == arr[i]).length > 1){
        count++;
        arr = arr.filter(x => x != arr[i]);
        i = -1;
      }
    }
    
    return count;
  }