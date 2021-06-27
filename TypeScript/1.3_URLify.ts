// 1.3 URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the "true"
// length of the string. (Note: If implementing in Java, please use a character array so that you can
// perform this operation in place.)

// SOLUTION #1 = TIME - O(n) | SPACE - O(1)
const URLify = (str: string, len: number): string => {
  let URLString = "";

  for (let i = 0; i < len; i++) {
    URLString += str[i] === " " ? "%20" : str[i];
  }

  return URLString;
};
