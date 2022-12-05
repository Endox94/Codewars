function firstNonRepeatingLetter(s) {
  let arr = s.toLowerCase().split('');
  
  for (let i = 0; i < arr.length; i++){
    if (arr.filter(x => x == arr[i]).length == 1){
      return s[i];
    }
  }
  return '';
}