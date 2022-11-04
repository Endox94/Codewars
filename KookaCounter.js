function kookaCounter(laughing) {
  let count = 0;
  let song = laughing.split('').filter(x => x != 'a');
  let lastOne;
  
  for (let i = 0; i < song.length; i++){
    if (song[i] != song[lastOne]){
      count++;
      lastOne = i;
    }
  }
  
  return count;
}