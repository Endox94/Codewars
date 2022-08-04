function order(words){
  let w = words.split(' ');
  let arr = [];
  for (let i = 0; i < w.length; i++){
    for (let j = 0; j < w.length; j++){
      if (w[j].includes(i+1)){
      arr.push(w[j]);
      }
    }
  }
  return arr.join(' ');
}