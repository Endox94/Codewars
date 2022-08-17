function validISBN10(isbn) {
    if (isbn.length != 10){
      return false;
    }
    
    let sum = 0;
    let arr = isbn.split('');
    
    if (arr[9] == 'X'){
      arr[9] = 10;
    }
    
    for (let i = 0; i < arr.length; i++){
      sum += arr[i] * (i+1);
    }
    
    return sum % 11 == 0;
  }