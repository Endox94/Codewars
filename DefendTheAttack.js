function hasSurvived(attackers, defenders){
    let aPower = attackers.reduce((acc, c) => acc + c, 0);
    let dPower = defenders.reduce((acc, c) => acc + c, 0);
    
    let aAlive = 0;
    let dAlive = 0;
    
    let greaterArmy = 0;
    
    if (attackers.length >= defenders.length){
      greaterArmy += attackers.length;
    } else {
      greaterArmy += defenders.length;
    }
    
    for (let i = 0; i < greaterArmy; i++){
      if (attackers[i] > defenders[i] || defenders[i] == undefined){
        aAlive++;
      } else if (defenders[i] > attackers[i] || attackers[i] == undefined){
        dAlive++;
      }
    }
    
    if (dAlive > aAlive){
      return true;
    } else if (dAlive == aAlive && dPower >= aPower){
      return true;
    } else {
      return false;
    }
  }
  