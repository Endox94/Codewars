function isValidWalk(walk) {
    let ns = 0;
    let ew = 0;
    
    for (let i = 0; i < walk.length; i++){
      if (walk[i] == 'n'){ns++}
      if (walk[i] == 's'){ns--}
      if (walk[i] == 'e'){ew++}
      if (walk[i] == 'w'){ew--}
    }
    
    if (ns == 0 && ew == 0 && walk.length == 10){
      return true;
    } else {
      return false;
    }
  }