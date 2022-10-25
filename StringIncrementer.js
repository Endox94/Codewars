function incrementString (strng) {
  
    let nums = [];
    
    for (let i = strng.length - 1; i >= 0; i--){
      if (Number(strng[i]) < 10){
        nums.unshift(strng[i]);
      } else {
        break;
      }
    }
    
    let word = strng.slice(0, strng.length - nums.length)
    
    nums = Number(nums.join('')) + 1;
    nums = nums.toString().split('');
    
    while (nums.length < strng.length - word.length){
      nums.unshift('0');
    } 
    
    return word + nums.join('');
  }