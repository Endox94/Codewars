function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++){
      for (let j = 1; j < numbers.length; j++){
        if (numbers[i] + numbers[j] == target && numbers.indexOf(numbers[i]) != numbers.indexOf(numbers[j], i+1)){
          return [i, j];
        }
      }
    }
  }