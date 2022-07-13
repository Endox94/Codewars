function digital_root(n) {

    while (n >= 10){
      
      n = n.toString().split('').reduce((acc, c) => +acc + +c, 0)
      
    }
    
    return n;
  }