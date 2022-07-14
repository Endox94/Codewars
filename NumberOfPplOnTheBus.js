var number = function(busStops){
    let ppl = 0;
    for (let i = 0; i < busStops.length; i++){
      ppl += busStops[i][0];
      ppl -= busStops[i][1];
    }
    return ppl;
  }