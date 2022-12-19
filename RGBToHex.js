function rgb(r, g, b){
    for (let i = 0; i < arguments.length; i++){
      if (arguments[i] < 0){
        arguments[i] = 0;
      }
      if (arguments[i] > 255){
        arguments[i] = 255;
      }
    }
    
    let red = r.toString(16);
    let green = g.toString(16);
    let blue = b.toString(16);
    
    if (red.length < 2){
      red = '0' + red;
    }
    
    if (green.length < 2){
      green = '0' + green;
    }
    
    if (blue.length < 2){
      blue = '0' + blue;
    }
    
    return (red + green + blue).toUpperCase();
  }