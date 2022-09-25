function toCamelCase(str){
  if (str.length == 0){
    return '';
  }
  
  let cC = str.replace(/[-_]/g, ' ').split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join('');
  
  if (str[0] == str[0].toUpperCase()){
    return cC;
  } else {
    return cC[0].toLowerCase() + cC.slice(1);
  }
}