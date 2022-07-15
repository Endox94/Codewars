function isPangram(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < alphabet.length; i++){
      if (string.toLowerCase().includes(alphabet[i]) == false){
        return false;
      }
    }
    return true;
  }