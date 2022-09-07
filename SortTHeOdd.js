function sortArray(array) {
  let odd = array.filter(x => x % 2 != 0).sort((a,b) => a - b);
  let count = 0;
  for (let i = 0; i < array.length; i++){
    if (array[i] % 2 != 0){
      array[i] = odd[count];
      count++;
    }
  }
  return array;
}