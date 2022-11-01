function shorter_reverse_longer(a,b){
    if (b.length > a.length){
      return a + b.split('').reverse().join('') + a;
    } else {
      return b + a.split('').reverse().join('') + b;
    }
  }