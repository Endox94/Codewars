function minMinMax(array) {
    let sorted = array.sort((a,b) => a-b);
    let min = sorted[0],
        max = sorted[sorted.length-1],
        minMissing;
    
    for (let i = min+1; i < max; i++){
      if (!array.includes(i)){
        minMissing = i;
        break;
      }
    }
    
    return [min, minMissing, max];
  }