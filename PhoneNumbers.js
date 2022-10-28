function isItANum(str) {
  
  let num = str.replace(/[^0-9]/gi, '');
  
  if (num[0] != '0' || num.length != 11){
    return 'Not a phone number';
  } else {
    return num;
  }
}