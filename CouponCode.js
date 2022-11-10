function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    if (enteredCode !== correctCode){
      return false;
    }
    
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    let currentArr = currentDate.replace(/[,]/ , '').split(' ');
    console.log(currentArr);
    
    let expirationArr = expirationDate.replace(/[,]/ , '').split(' ');
    console.log(expirationArr);
    
    if (Number(currentArr[2]) < Number(expirationArr[2])){
      return true;
    } 
    if (Number(currentArr[2]) <= Number(expirationArr[2]) && months.indexOf(currentArr[0]) < months.indexOf(expirationArr[0])){
      return true;
    } 
    if (Number(currentArr[2]) <= Number(expirationArr[2]) && months.indexOf(currentArr[0]) <= months.indexOf(expirationArr[0]) && Number(currentArr[1]) <= Number(expirationArr[1])){
      return true;
    } 
    return false;
  }