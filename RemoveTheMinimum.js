function removeSmallest(numbers) {
    let min = Math.min(...numbers);
    let arr = [];
    for (let i = 0; i < numbers.length; i++){
      if (numbers[i] > min || i > numbers.indexOf(min)){
        arr.push(numbers[i]);
      }
    }
    return arr;
  }