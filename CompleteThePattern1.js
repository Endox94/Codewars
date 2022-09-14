function pattern(n){
    let output="";
      for (let i = 0; i < n; i++){
        for (let j = 0; j < i+1; j++){
          output += i+1;
        }
        output += '\n';
      }
    return output.slice(0,-1);
   }