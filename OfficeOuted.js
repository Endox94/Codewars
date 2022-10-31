function outed(meet, boss){
 
    let arr = Object.values(meet);
    
    let bossValue = arr[Object.keys(meet).indexOf(boss)];
    
    let sum = arr.reduce((acc, c) => acc + Number(c), 0);
    let avrg = (sum + bossValue)/(arr.length);
  
    return avrg <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
  }