function prevMultOfThree (n){
    n = n.toString().split('');
    
    while (n.length > 0){
      if (Number(n.join('')) % 3 == 0){
        return Number(n.join(''));
      } else {
        n.pop();
      }
    }
    
    return null;
  }