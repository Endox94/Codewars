function flyBy(lamps, drone){
  let os = '';
  for (let i = 0; i < drone.length && i < lamps.length; i++){
    os += 'o';
  }
  return drone.length <= lamps.length ? os + lamps.slice(drone.length) : os;
}