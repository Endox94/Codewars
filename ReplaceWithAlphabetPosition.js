function alphabetPosition(text) {
    let al = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let res = [];
    
    text = text.toLowerCase().replace(/[^a-z]+/gi, '').split('');
    
    for (let i = 0; i < text.length; i++){
      res.push(al.indexOf(text[i]) + 1)
    } 
    
    return res.join(' ').toString();
  }