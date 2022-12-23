function purifyTheStratholme(s) {
  let res = '';
  
  for (let i = 0; i < s.length; i++){
    if (s[i] == 'i' || s[i] == 'I' || s[i+1] == 'i' || s[i+1] == 'I' || s[i-1] == 'i' || s[i-1] == 'I'){
      res += '';
    } else {
      res += s[i];
    }
  }
  
  return res.trim();
}