function solve(a, b) {
    let count = 0;
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    
    for (let i = a; i < b; i++){
      let iSquare = i**2;
      
      if (primes.includes(Number(i.toString().slice(0,2))) && primes.includes(Number(iSquare.toString().slice(0,2)))){
        if (Number(i.toString().slice(-2)) == Number(iSquare.toString().slice(-2))){
          count++;
        }
      }
    }
    
    return count;  
  }