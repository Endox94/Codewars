function findNb(m){
  let x;
  
  if (m.toString().length > 10){
    x = 1000000;
  } else {
    x = 10000;
  }
  
  for (let i = 1; i < x; i++){
    if (((i*(i+1))/2)**2 == m){
      return i;
    }
  }
  return -1;
}