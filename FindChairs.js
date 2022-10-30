function meeting(x, need){
    if (need == 0){
      return 'Game On';
    }
    // Create empty array to .push chairs of each room
    let chairsTaken = [];
    
    for (let i = 0; i < x.length; i++){
      //free chairs in each room
      let freeChairs = x[i][1] - x[i][0].length;
      //.push number of chairs taken from room, reduce need by that amount
      if (freeChairs >= 0 && freeChairs <= need){
        chairsTaken.push(freeChairs);
        need -= freeChairs;
      } else if (freeChairs < 0){
        chairsTaken.push(0);
      } else if (freeChairs > 0 && freeChairs > need){
        chairsTaken.push(need);
        need = 0;
        break;
      }
      if (need == 0){
        break;
      }
    }
    
    if (need == 0){
      return chairsTaken;
    } else {
      return 'Not enough!'
    }
  }