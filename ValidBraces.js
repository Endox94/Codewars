function validBraces(braces){
    if (braces.length % 2 != 0){
      return false;
    }
    
    for (let i = 0; i < 10; i++){
      if (braces.includes('()')){
        braces = braces.replace('()', '');
      } 
      if (braces.includes('{}')){
        braces = braces.replace('{}', '');
      } 
      if (braces.includes('[]')){
        braces = braces.replace('[]', '');
      }
    }
    
    return braces.length == 0;
  }