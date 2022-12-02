function londonCityHacker(journey) {
    let cost = 0;
    
    for (let i = 0; i < journey.length; i++){
      if(typeof journey[i] == 'string'){
        cost += 2.40;
      } else if (typeof journey[i] == 'number' && typeof journey[i+1] == 'number'){
        cost += 1.5;
        i++;
      } else if (typeof journey[i] == 'number'){
        cost += 1.5;
      }
    }
    
    return`£${cost.toFixed(2)}`;
  }