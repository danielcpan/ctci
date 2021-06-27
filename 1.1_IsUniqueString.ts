// 1.1) Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
// cannot use additional data structures?

// SOLUTION #1 = TIME - O(1) | SPACE - O(n)
const isUniqueString = (str: string): boolean => {
  return new Set(str).size === str.length;
};

// SOLUTION #2 = TIME - O(nlogn) | SPACE - O(1)
// const isUniqueString = (str: string): boolean => {
//   return str
//     .split("")
//     .sort((a, b) => a.localeCompare(b))
//     .some((el: string, idx: number) => el === str[idx - 1]);
// };
