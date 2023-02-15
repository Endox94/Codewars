function pigIt(str){
    let s = str.split(' ');
    let arr = [];
    let punct = str.replace(/[a-z]/gi, '').trim();
    
    if (punct){
      s.pop();
    }
    
    for (let i = 0; i < s.length; i++){
      let word = s[i].slice(1) + s[i][0] + 'ay';
      arr.push(word);
    }
    
    return punct ? arr.join(' ') + ' ' + punct : arr.join(' ');
  }