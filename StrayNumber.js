function stray(numbers) {
  return numbers.filter(x => x == numbers[0]).length == 1 ? numbers[0] : numbers.filter(x => x != numbers[0])[0];
}