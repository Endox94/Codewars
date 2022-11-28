function toWeirdCase(string){
    let arr = string.split(' ');
    let res = [];
    for (let i = 0; i < arr.length; i++){
      let word = [];
      for (let j = 0; j < arr[i].length; j++){
        if (j % 2 == 0){
          word.push(arr[i][j].toUpperCase());
        } else {
          word.push(arr[i][j].toLowerCase());
        }
      }
      res.push(word.join(''));
    }
    return res.join(' ');
  }