// 1.7 Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

const rotateMatrix = (matrix: number[][]): number[][] => {
  return [[0]];
};

// TEST CASES:
console.log(
  rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  rotateMatrix([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
);
console.log(
  rotateMatrix([
    [1, 2],
    [3, 4],
  ])
);
