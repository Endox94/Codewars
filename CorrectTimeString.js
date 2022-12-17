function timeCorrect(timestring) {
  console.log(timestring);
  
  if (timestring == null){
    return null;
  } else if (timestring.length == 0){
    return '';
  } if (timestring.length != 8 || !timestring.includes(':') || timestring.replace(/[a-z]/gi, '').length != timestring.length){
    return null;
  }
  
  let arr = timestring.split(':');
  let res = [];
  
  //Correct seconds, add to minutes
  if (Number(arr[2]) > 60){
    res.unshift((Number(arr[2]) % 60).toString());
    arr[1] = Number(arr[1]) + 1;
  } else if (Number(arr[2]) == 60){
    res.unshift('00');
    arr[1] = Number(arr[1]) + 1;
  } else {
    res.unshift(arr[2]);
  }
  
  //Correct minutes, add to hours
  if (Number(arr[1]) > 60){
    res.unshift((Number(arr[1]) % 60).toString());
    arr[0] = Number(arr[0]) + 1;
  } else if (Number(arr[1]) == 60){
    res.unshift('00');
    arr[0] = Number(arr[0]) + 1;
  } else {
    res.unshift(arr[1]);
  }
  
  //Correct hours
  if (Number(arr[0]) >= 24){
    if (Number(arr[0]) % 24 >= 10){
      res.unshift((Number(arr[0]) % 24).toString());
    } else {
      res.unshift('0' + Number(arr[0]) % 24);
    }
  } else {
    res.unshift(arr[0]);
  }
  
  if (res[0].length < 2){
    res[0] = '0' + res[0];
  }
  if (res[1].length < 2){
    res[1] = '0' + res[1];
  }
  if (res[2].length < 2){
    res[2] = '0' + res[2];
  }
  console.log(res);
  return res.join(':')
}