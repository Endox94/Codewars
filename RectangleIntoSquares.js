function sqInRect(lng, wdth){
    if (lng == wdth){
      return null;
    }
    
    let area = lng * wdth;
    let arr = [];
    while (area > 0){
      if (lng >= wdth){
        arr.push(wdth);
        area -= wdth*wdth;
        lng -= wdth;
      }
      if (wdth > lng){
        arr.push(lng);
        area -= lng*lng;
        wdth -= lng;
      }
    }
    
    if (arr[arr.length-1] == 0){
      arr.pop();
    }
    
    return arr;
  }