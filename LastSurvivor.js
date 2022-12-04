function lastSurvivor(letters, coords) {
    let res = letters.split('');
    for (let i = 0; i < coords.length; i++){
      res.splice(coords[i], 1);
    }
    return res.join('');
  }