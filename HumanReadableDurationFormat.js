function formatDuration (seconds) {
    if (seconds == 0){
      return 'now';
    }
    // calculate time units
    let yrs = Math.floor(seconds / 31536000);
    let modYrs = seconds % 31536000;
    
    let days = Math.floor(modYrs / 86400);
    let modDays = modYrs % 86400;
    
    let hrs = Math.floor(modDays / 3600);
    let modHrs = modDays % 3600;
    
    let mins = Math.floor(modHrs / 60);
    let modMins = modHrs % 60;
    
    let secs = modMins;
   
    //fit string to special case of 1 time unit
    let yrsEnding = ' years';
    if (yrs == 1){
      yrsEnding = ' year'
    }
    let daysEnding = ' days';
    if (days == 1){
      daysEnding = ' day'
    }
    let hrsEnding = ' hours';
    if (hrs == 1){
      hrsEnding = ' hour'
    }
    let minsEnding = ' minutes';
    if (mins == 1){
      minsEnding = ' minute'
    }
    let secsEnding = ' seconds';
    if (secs == 1){
      secsEnding = ' second'
    }
    // array with time units as strings
    let arr = [yrs.toString() + yrsEnding, days.toString() + daysEnding, hrs.toString() + hrsEnding, mins.toString() + minsEnding, secs.toString() + secsEnding];
    //remove array elements of time units with the value 0
    for (let j = 0; j < arr.length; j++){
      if (arr[j][0] == 0){
        arr.splice(j, 1);
        j--;
      }
    }
    //set result string to biggest time unit with value >0
    let res = arr[0];
    //add remaining time units with values >0
    for (let i = 1; i < arr.length; i++){
      if (i == arr.length - 1){
        res += ` and ${arr[i]}`
      } else {
        res += `, ${arr[i]}`
      }
    }
    
    return res;
  }