function reverse(str){
  
    str = str.split(' ');
    let arr = [];
    
    for (let i = 0; i < str.length; i++){
      if(i % 2 != 0){
        arr.push(str[i].split('').reverse().join(''));
      } else {
        arr.push(str[i]);
      }
    }
    
    return arr.join(' ').trim();
  }