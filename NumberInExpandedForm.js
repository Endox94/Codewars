function expandedForm(num) {
    let str = num.toString();
    let arr = [];
    
    for (let i = 0; i < str.length; i++){
      if (str[i] != 0){
        arr.push(`${Number(str.slice(i))-Number(str.slice(i+1))}`);
      }
    }
    
    return arr.join(' + ')
  }