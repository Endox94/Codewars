function amountOfPages(summary){
    let pages = '';
    let i = 1;
    
    while (pages.length < summary){
      pages += `${i}`;
      i++;
    }
    
    return i-1;
  }