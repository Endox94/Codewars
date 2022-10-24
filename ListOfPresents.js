function howManyGifts(maxBudget, gifts){
    gifts.sort((a,b) => a - b);
    let count = 0;
    
    while (maxBudget >= gifts[0]){
      maxBudget -= gifts[0];
      gifts.shift();
      count++;
    }
    
    return count;
  }