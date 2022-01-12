// 1.6 String Compression: Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
// "compressed" string would not become smaller than the original string, your method should return
// the original string. You can assume the string has only uppercase and lowercase letters (a - z).

// SOLUTION #1 = TIME - O(n) | SPACE - O(1)
const stringCompression = (str: string): string => {
  if (str.length < 3) return str;

  const [compressedStr] = [...str].reduce<[string, number]>(
    ([cs, count]: [string, number], el: string, idx: number) => {
      const nextEl = str[idx + 1];

      return el === nextEl ? [cs, count + 1] : [`${el}${count}`, 1];
    },
    ["", 1]
  );

  return compressedStr.length > str.length ? str : compressedStr;
};

// TEST CASES:
console.log(stringCompression("aabcccccaaa"));
console.log(stringCompression("aaa"));
console.log(stringCompression("aa"));
