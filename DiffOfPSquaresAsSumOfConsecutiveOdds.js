function squaresToOdd(sqr1, sqr2){
   
    let res = sqr1**2 - sqr2**2;
    let odds = [];
     
    for (let i = (res/(sqr1 - sqr2))-(sqr1 - sqr2); i < (res/(sqr1 - sqr2))+(sqr1 - sqr2); i++){
      if (i % 2 != 0){
        odds.push(i);
      }
    }
    
    return sqr1+'^2 - '+sqr2+'^2 = '+ odds.join(' + ') + ' = '+res;
  }