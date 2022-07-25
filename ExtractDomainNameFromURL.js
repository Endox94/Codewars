function domainName(url){
  
    let domN;
    let start;
    
    if (url.includes('www.') == true){
      start = url.indexOf('www.') + 4;
    } else if (url.includes('www.') == false && url.includes('://') == true){
      start = url.indexOf('://') + 3;
    } else {
      start = 0;
    }
    
    let end = url.indexOf('.', start + 1);
    domN = url.slice(start, end);
    
    return domN;
  }