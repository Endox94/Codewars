function nextPal(val){
    for (let i = val+1; i < val*10; i++){
      if (i.toString().split('').reverse().join('') == i.toString()){
        return i;
      }
    }
  }