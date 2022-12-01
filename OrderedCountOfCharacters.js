const orderedCount = function (text) {
    if (text.length == 0){
      return [];
    }
    
    let res = [];
    let textArr = text.split('');
    
    while (textArr.length > 0){
      let length = textArr.length;
      let letter = textArr[0];
      textArr = textArr.filter(x => x != textArr[0]);
      res.push([letter, length - textArr.length]);
    }
    
    return res;
  }