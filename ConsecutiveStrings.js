function longestConsec(strarr, k) {
    let word = '';
    for (let i = 0; i < strarr.length-(k-1); i++){
      let newStr = '';
      for (let j = i; j < i+k; j++){
        newStr += strarr[j];
      }
      if (newStr.length > word.length){
        word = newStr;
      } else {
        newStr = '';
      }
    }
    return word;
  }