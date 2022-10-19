function zeroAndOne(s) {
  let arr = s.split('');
  for (let i = 0; i < arr.length; i++){
    if ((arr[i] == '1' && arr[i+1] == '0') || (arr[i] == '0' && arr[i+1] == '1')){
      arr.splice(i, 2, ' ');
    }
  }
  return arr.filter(x => x != ' ').length;
}