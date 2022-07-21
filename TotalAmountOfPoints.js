function points(games) {
    let points = 0;
    games.forEach(x => {
      if (x[0]>x[2]){
        points += 3;
      } else if (x[0] == x[2]){
        points += 1;
      }
    })
    return points;
  }