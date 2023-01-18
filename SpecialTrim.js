function trim(str, size) {
  if (str.length < 3){
    return str.slice(0, size) + '...';
  }
  
  if (str.length == size || str.length < size-3){
    return str;
  }
  
  return str.slice(0, size-3) + '...';
}