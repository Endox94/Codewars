function encrypt(text, n) {
  for (let i = 0; i < n; i++){
    let odd = '';
    let even = '';
    
    for (let j = 0; j < text.length; j++){
      j % 2 != 0 ? odd += text[j] : even += text[j];
    }
    
    text = odd + even;
  }
  return text;
}