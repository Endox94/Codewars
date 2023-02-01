function covfefe(str){
  if (!str.includes('coverage')){
    return str + ' covfefe';
  }
  return str.replace(/coverage/g, 'covfefe');
}