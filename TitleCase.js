function titleCase(title, minorWords) {
    if (title.length == 0){
      return '';
    }
    
    let arr = title.toLowerCase().split(' ');
  
    let captd = arr.map(x => x = x[0].toUpperCase() + x.slice(1).toLowerCase());
    
    if (minorWords){
      minorWords = minorWords.toLowerCase();
    }
  
    if (minorWords){
      
      for (let i = 0; i < minorWords.length; i++){
      
        if (arr.includes(minorWords.split(' ')[i])){
          let index = arr.indexOf(minorWords.split(' ')[i]);
          let index2 = arr.indexOf(minorWords.split(' ')[i], index+1);
          captd.splice(index, 1, arr[index]);
          if (index2 > 0){
            captd.splice(index2, 1, arr[index])
          }
        }
      }
    }
    
    
    // Capitalize first letter
    if (captd[0][0] == captd[0][0].toLowerCase()){
      captd.splice(0, 1, captd[0][0].toUpperCase() + captd[0].slice(1).toLowerCase())
    }
      console.log(captd.join(' '));
  
    return captd.join(' ');
  }