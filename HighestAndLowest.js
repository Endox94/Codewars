function highAndLow(numbers){
    // ...
    let numArray = numbers.split(' ').sort((a,b) => b - a);
                    
    return `${numArray[0]} ${numArray[numArray.length-1]}`;
  }