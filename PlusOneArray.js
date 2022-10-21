function upArray(arr){
    for (let i = 0; i < arr.length; i++){
      if (arr[i] < 0 || arr[i] > 9){
        return null;
      }
    }
    
    if (arr.length < 5){
      let num = Number(arr.join('')) + 1;
      
      if (num == 1){ return null}
      
      return num.toString().split('').map(x => Number(x));
    } else {
      let end = arr.slice(-5);
      end = Number(end.join('')) + 1;
      
      end = end.toString().split('').map(x => Number(x));
      
      if (arr.slice(-5)[0] == 0){
        end.unshift(0);
      }
      
      return arr.slice(0, arr.length - 5).concat(end);
    }
  }