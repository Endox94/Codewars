function score( dice ) {
    let ones = dice.filter(x => x == 1);
    let twos = dice.filter(x => x == 2);
    let threes = dice.filter(x => x == 3);
    let fours = dice.filter(x => x == 4);
    let fives = dice.filter(x => x == 5);
    let sixes = dice.filter(x => x == 6);
    let count = 0;
    
    if (ones.length >= 3){
      count += 1000;
      ones.splice(0, 3)
    }
    if (twos.length >= 3){
      count += 200;
      twos.splice(0, 3)
    }
    if (threes.length >= 3){
      count += 300;
      threes.splice(0, 3)
    }
    if (fours.length >= 3){
      count += 400;
      fours.splice(0, 3)
    }
    if (fives.length >= 3){
      count += 500;
      fives.splice(0, 3)
    }
    if (sixes.length >= 3){
      count += 600;
      sixes.splice(0, 3)
    }
    
    if (ones.length < 3){
      count += ones.length * 100;
    }
    if (fives.length < 3){
      count += fives.length * 50;
    }
    
    return count;
  }