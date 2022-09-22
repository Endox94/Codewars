function rot13(message){
    let res = [];
    let alphabetL = 'abcdefghijklmnopqrstuvwxyz';
    let alphabetU = alphabetL.toUpperCase();
    
    let arr = message.split('').map(x => x.charCodeAt(0)+13);
    for (let i = 0; i < arr.length; i++){
      
      if (!alphabetL.includes(message[i].toLowerCase())){
        res.push(message[i])
      } else if ((arr[i] > 122) && alphabetL.includes(message[i])){
        res.push(String.fromCharCode(arr[i]-26));
      } else if ((arr[i] > 90) && alphabetU.includes(message[i])){
        res.push(String.fromCharCode(arr[i]-26));
      } else {
        res.push(String.fromCharCode(arr[i]));
      }
    }
     
    return res.join('');
  }