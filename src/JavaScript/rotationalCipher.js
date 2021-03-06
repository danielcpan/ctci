// Rotational Cipher
// One simple way to encrypt a string is to "rotate" every alphanumeric character by a certain amount. Rotating a character means replacing it with another character that is a certain number of steps away in normal alphabetic or numerical order.
// For example, if the string "Zebra-493?" is rotated 3 places, the resulting string is "Cheud-726?". Every alphabetic character is replaced with the character 3 letters higher (wrapping around from Z to A), and every numeric character replaced with the character 3 digits higher (wrapping around from 9 to 0). Note that the non-alphanumeric characters remain unchanged.
// Given a string and a rotation factor, return an encrypted string.
// Signature
// string rotationalCipher(string input, int rotationFactor)
// Input
// 1 <= |input| <= 1,000,000
// 0 <= rotationFactor <= 1,000,000
// Output
// Return the result of rotating input a number of times equal to rotationFactor.
// Example 1
// input = Zebra-493?
// rotationFactor = 3
// output = Cheud-726?
// Example 2
// input = abcdefghijklmNOPQRSTUVWXYZ0123456789
// rotationFactor = 39
// output = nopqrstuvwxyzABCDEFGHIJKLM9012345678

// Add any extra import statements you may need here

// Add any helper functions you may need here
const chars = "abcdefghijklmnopqrstuvwxyz";
const numeric = "0123456789";

const cipherEl = (el, charsShift, numericShift) => {
  const charCode = el.toLowerCase().charCodeAt(0) - 97;
  const isChar = chars[charCode] !== undefined;

  if (isChar) {
    const isUpper = el === el.toUpperCase();
    const letter = chars[(charCode + charsShift) % chars.length];

    return isUpper ? letter.toUpperCase() : letter;
  }

  const isNum = numeric[el] !== undefined;

  if (isNum) {
    return numeric[(parseInt(el) + numericShift) % numeric.length];
  }

  return el;
};

function rotationalCipher(input, rotationFactor) {
  const charsShift = rotationFactor % chars.length;
  const numericShift = rotationFactor % numeric.length;
  const cipher = [];

  for (let i = 0; i < input.length; i++) {
    cipher.push(cipherEl(input[i], charsShift, numericShift));
  }
  // Write your code here
  return cipher.join("");
}

// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printString(str) {
  var out = '["' + str + '"]';
  return out;
}

var test_case_number = 1;

function check(expected, output) {
  var result = expected == output;
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + " Test #" + test_case_number;
    console.log(out);
  } else {
    var out = "";
    out += wrongTick + " Test #" + test_case_number + ": Expected ";
    out += printString(expected);
    out += " Your output: ";
    out += printString(output);
    console.log(out);
  }
  test_case_number++;
}

var input_1 = "All-convoYs-9-be:Alert1.";
var rotationFactor_1 = 4;
var expected_1 = "Epp-gsrzsCw-3-fi:Epivx5.";
var output_1 = rotationalCipher(input_1, rotationFactor_1);
check(expected_1, output_1);

var input_2 = "abcdZXYzxy-999.@";
var rotationFactor_2 = 200;
var expected_2 = "stuvRPQrpq-999.@";
var output_2 = rotationalCipher(input_2, rotationFactor_2);
check(expected_2, output_2);

// Add your own test cases here
