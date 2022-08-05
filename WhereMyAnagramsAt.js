function anagrams(word, words){
    let arr = [];
    for (let i = 0; i < words.length; i++){
      if (word.split('').sort((a,b)=>a.localeCompare(b)).join('') == words[i].split('').sort((a,b)=>a.localeCompare(b)).join('')){
        arr.push(words[i]);
      }
    }
    return arr;
  }