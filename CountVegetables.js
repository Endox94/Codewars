function countVegetables(string){
    let arr = ['pepper', 'carrot', 'turnip', 'onion', 'tofu', 'cabbage', 'mushroom', 'cucumber', 'potato', 'celery'];
    let res = [];
    
    for (let i = 0; i < arr.length; i++){
      let n = string.split(' ').filter(x => x == arr[i] || x == arr[i]+'\n');
      res.push([n.length, arr[i]]);
    }
    
    res.sort((a, b) => b[0] - a[0] || b[1].localeCompare(a[1]));
    
    while (res[res.length-1][0] == 0){
      res.pop()
    }
    
    return res;
  }