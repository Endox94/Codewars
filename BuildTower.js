function towerBuilder(nFloors) {
    // Calculate width of tower
    let width = (nFloors*2) - 1;
    // Declare empty result array
    let res = [];
    
    for (let i = 1; i <= width; i+=2){
      // Declare empty array for each line that resets every "big" loop
      let arr = [];
      for (let ind = 0; ind < i; ind++){
        arr.push('*');
      }
      for (let j = 0; arr.length < width; j++){
          arr.push(' ');
          arr.unshift(' ');
      }
      
      res.push(arr.join(''));
    }
    return res;
  }