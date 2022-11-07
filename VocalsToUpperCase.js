function swap (string) {
  let arr = [];
  for (let i = 0; i < string.length; i++){
    if (string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u'){
      arr.push(string[i].toUpperCase());
    } else {
      arr.push(string[i]);
    }
  }
  return arr.join('');
}