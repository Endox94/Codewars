function findMissingLetter(array){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    if (array[0] == array[0].toUpperCase()){
      alphabet = alphabet.toUpperCase();
    }
    
    let aSplit = alphabet.split('');
    let start = aSplit.indexOf(array[0]);
    
    for (let i = 0; i <= array.length; i++){
      if (aSplit[i + start] != array[i]){
        return aSplit[i + start];
      }
    }
  }