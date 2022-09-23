function longest(s1, s2) {
    let combined = s1 + s2;
    let arr = [];
    
    for (let i = 0; i < combined.length; i++){
      if (!arr.includes(combined[i])){
        arr.push(combined[i]);
      }
    }
    return arr.sort((a,b) => a.localeCompare(b)).join('');
  }