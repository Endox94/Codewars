function accum(s) {
    let arr = []
    
    for (let i = 0; i < s.length; i++){
      let word = s[i].toUpperCase()
        for (let j = 0; j < i; j++){
          word += s[i].toLowerCase()
        }
      arr.push(word)
    }
    
    return arr.join('-');
    }