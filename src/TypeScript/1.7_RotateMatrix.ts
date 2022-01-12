// 1.7 Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

const rotateMatrix = (matrix: number[][]): number[][] => {
  const rows: number = matrix[0].length;
  const cols: number = matrix.length;

  printMatrix(matrix);

  for (let i: number = 0; i < rows - 1; i++) {
    for (let j: number = 0; j < cols - 1; j++) {
      const temp: number = matrix[i][j];
      matrix[i][j] = matrix[rows - 1 - j][i];
      matrix[rows - 1 - j][i] = matrix[rows - 1][cols - 1 - j];
      matrix[rows - 1][cols - 1 - j] = matrix[i + j][cols - 1];
      matrix[i + j][cols - 1] = temp;

      // console.log("matrix:", matrix);
      printMatrix(matrix);
    }
  }

  return matrix;
};

const printMatrix = (matrix: number[][]): void => {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
  }
  console.log();
};

// TEST CASES:
console.log(
  rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3],
// ];

// console.log(
//   rotateMatrix([
//     [5, 1, 9, 11],
//     [2, 4, 8, 10],
//     [13, 3, 6, 7],
//     [15, 14, 12, 16],
//   ])
// );
// console.log(
//   rotateMatrix([
//     [1, 2],
//     [3, 4],
//   ])
// );
