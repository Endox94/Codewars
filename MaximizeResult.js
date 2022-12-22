function expressionMatter(a, b, c) {
    let sum = a+b+c;
    if ((a+b)*c > sum){
      sum = (a+b)*c;
    }
    if (a*(b+c) > sum){
      sum = a*(b+c);
    }
    if (a*b*c > sum){
      sum = a*b*c;
    }
    return sum;
  }