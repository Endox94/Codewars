function scramble(str1, str2) {
    
    str1 = str1.split('');
    str2 = str2.split('');
    
    for (let i = 0; i <= 26; i++){
      if (str1.filter(x => x == str2[0]).length < str2.filter(x => x == str2[0]).length){
        return false;
      } else {
        str1 = str1.filter(x => x != str2[0]);
        str2 = str2.filter(x => x != str2[0]);
      }
    }
    
    return true;
  }