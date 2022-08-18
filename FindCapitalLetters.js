function capitals (word) {
	let arr = [];
  
  for (let i = 0; i < word.length; i++){
    if (word[i] == word[i].toUpperCase()){
      arr.push(i);
    }
  }
  
  return arr;
}