function wave(str){
    let res = [];
    
    for (let i = 0; i < str.length; i++){
      if (str[i] !== ' '){
        let toPush = str.slice(0,i) + str[i].toUpperCase() + str.slice(i+1, str.length);
        res.push(toPush);    
      }
    }
    
    return res;
  }