function high(x){
    let arr = x.split(' ')
    let score = [];
    
    for (let i = 0; i < arr.length; i++){
      score.push(arr[i].split('').reduce((acc, c) => acc + (c.charCodeAt() - 96), 0));
    }
    
    let ind = score.indexOf(Math.max(...score));
    
    return arr[ind];
  }