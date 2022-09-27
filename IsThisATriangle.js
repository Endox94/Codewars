function isTriangle(a,b,c){
    if (a + b <= c || a + c <= b || c + b <= a){
      return false;
    }
    return a * b * c > 0;
  }