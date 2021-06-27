// 1.4 Palindrome Permutation: Given a string, write a function to check if it is a permutation of a
// palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation
// is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

// SOLUTION #1 = TIME - O(n) | SPACE - O(n)
const palindromePermutation = (str: string): boolean => {
  const cleanedStr = str.toLowerCase().replace(/\s/g, "");

  const charSet = [...cleanedStr].reduce((acc: Set<string>, el: string) => {
    if (acc.has(el)) acc.delete(el);
    else acc.add(el);

    return acc;
  }, new Set());

  return charSet.size < 2;
};

// TEST CASES:
console.log(palindromePermutation("Tact Cao"));
console.log(palindromePermutation("racecar"));
console.log(palindromePermutation("werererew"));
