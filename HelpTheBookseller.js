function stockList(listOfArt, listOfCat){
  
  if (listOfArt.length == 0 || listOfCat.length == 0){
        return '';
  }
  
  let res = [];
  let count = 0;
  
  for (let i = 0; i < listOfCat.length; i++){
    let num = listOfArt.filter(x => x[0] == listOfCat[i]).join(' ').split(' ');
    
    for (let k = 1; k < num.length; k += 2){
      count += Number(num[k]);
    }
    
    res.push(`(${listOfCat[i]} : ${count})`);
    
    count = 0;
  }
  
  return res.join(' - ');
}