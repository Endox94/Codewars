function calculate1RM(w, r){
    if (r == 0){
      return 0;
    }
    if (r == 1){
      return w;
    }
    let arr = [];
    
    let epley = Math.round(w * (1 + (r/30)));
    let mcG = Math.round((100 * w)/(101.3-(2.67123 * r)));
    let lombardi = Math.round(w * (r ** 0.1))
    
    arr.push(epley);
    arr.push(mcG);
    arr.push(lombardi);
    
    return arr.sort((a,b) => b - a)[0];
  }