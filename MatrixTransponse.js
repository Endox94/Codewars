function transpose(matrix) {
  let arr = [];
  for (let i = 0; i < matrix[0].length; i++){
    let piece = [];
    for (let j = 0; j < matrix.length; j++){
      piece.push(matrix[j][i]);
    }
    arr.push(piece);
  }
  return arr;
}