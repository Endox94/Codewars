function hexHash(code){
  let str = '';
  for (let i = 0; i < code.length; i++){
    str += code[i].charCodeAt(0).toString(16);
  }
  return str.replace(/[a-z]/gi, '').split('').reduce((acc, c) => Number(c) + acc, 0);
}