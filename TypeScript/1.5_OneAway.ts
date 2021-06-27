// 1.5 One Away: There are three types of edits that can be performed on strings: insert a
// character, remove a character, or replace a character. Given two strings, write a function
// to check if they are one edit (or zero edits) away.

// SOLUTION #1 = TIME - O(n) | SPACE - O(1)
const oneAway = (a: string, b: string): boolean => {
  if (a === b) return true;

  if (Math.abs(a.length - b.length) > 1) return false;

  const [longer, shorter] = a.length > b.length ? [a, b] : [b, a];

  const editsLeft = [...longer].reduce((acc: number, el: string, idx: number) => {
    return el !== shorter[idx] ? acc + 1 : acc;
  }, 0);

  return editsLeft < 2;
};

// TEST CASES:
console.log(oneAway("pales", "ple"));
console.log(oneAway("pales", "pale"));
console.log(oneAway("pale", "bale"));
console.log(oneAway("pale", "bake"));
console.log(oneAway("pale", "xywz"));
