function mergeStrings(first, second){
    for (let i = 0; i < first.length; i++){
      let end = first.length-i;
      if (first.slice(i) == second.slice(0,end)){
        return first.slice(0,i) + second;
      }
    }
    return first + second;
  }