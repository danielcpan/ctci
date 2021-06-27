// 1.2) Check Permutation: Given two strings, write a method to decide if one is a permutation of the
// other.

// SOLUTION #1 = TIME - O(n) | SPACE - O(n)
const checkPermutation = (a: string, b: string): boolean => {
  const aCharMap = [...a].reduce((acc: { [key: string]: number }, el: string) => {
    return { ...acc, [el]: !!acc[el] ? acc[el] + 1 : 1 };
  }, {});

  return [...b].every((el: string) => (aCharMap[el] -= 1) > -1);
};

// SOLUTION #2 = TIME - O(nlogn) | SPACE - O(n)
// const compare = (a: string, b: string) => a.localeCompare(b);

// const checkPermutation = (a: string, b: string): boolean => {
//   return [...a].sort(compare).join("") === [...b].sort(compare).join("");
// };
