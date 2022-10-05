function cleanString(s) {
    s = s.split('');
    
    for (let i = 0; i < s.length; i++){
      if (s[i] == '#'){
        if (i == 0){
          s.shift();
        } else {
          s.splice(i-1, 2);
        }
        i = 0;
      }
    }
    
    if (s[0] == '#'){
      s.shift();
    }
    
    return s.join('');
  }